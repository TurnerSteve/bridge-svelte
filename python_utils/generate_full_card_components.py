# python_utils/generate_full_card_components.py
import sys
from pathlib import Path

# Step up to project root before importing
current_file = Path(__file__).resolve()
project_root = current_file.parent.parent  # this goes up from python_utils/
sys.path.insert(0, str(project_root))

from python_utils.get_project_root import get_project_root

get_project_root()  # Ensures sys.path includes project root

# Now safe to import anything else within the project
# Example paths
SVG_SOURCE_DIR = get_project_root() / "src" / "assets" / "DECK1_cards_optimized"
SVELTE_OUTPUT_DIR = get_project_root() / "src" / "lib" / "icons" / "DECK1-cards"

# Template
SVELTE_TEMPLATE = """<!-- {filename}.svelte -->
<script module lang="ts">
  export interface Props {
    size?: number;
    color?: string;
    class?: string;
  }
</script>

<script lang="ts">
  const { size = 48, color = 'currentColor', class: className = '' } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 160 238"
  fill={color}
  width={size}
  height={size}
  class={className}
   preserveAspectRatio="xMidYMid meet"
>
  {svg_path_data}
</svg>
"""
from bs4 import BeautifulSoup

def extract_path_data(svg_content: str) -> str:
    soup = BeautifulSoup(svg_content, "lxml")
    svg_tag = soup.find("svg")
    if not svg_tag:
        raise ValueError("No <svg> tag found")

    # Remove attributes with colons (e.g. xml:space)
    attrs_to_delete = [attr for attr in svg_tag.attrs if ':' in attr]
    for attr in attrs_to_delete:
        del svg_tag.attrs[attr]

    # Recursively remove namespaced attributes in child elements
    for tag in svg_tag.find_all(True):  # True finds all tags
        for attr in list(tag.attrs):
            if ':' in attr:
                del tag.attrs[attr]

    return "".join(str(child) for child in svg_tag.contents if str(child).strip())

def generate_components():
    if not SVG_SOURCE_DIR.exists():
        print(f"❌ SVG directory not found: {SVG_SOURCE_DIR}")
        return

    SVELTE_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for svg_file in SVG_SOURCE_DIR.glob("*.svg"):
        try:
            name = svg_file.stem.replace("-", "_")
            svelte_file = SVELTE_OUTPUT_DIR / f"{name}.svelte"

            with open(svg_file, "r", encoding="utf-8") as f:
                raw_svg = f.read()

            path_data = extract_path_data(raw_svg)
            output = SVELTE_TEMPLATE.replace("{svg_path_data}", path_data).replace("{filename}", name)

            with open(svelte_file, "w", encoding="utf-8") as f:
                f.write(output)

            print(f"✅ Created: {svelte_file.name}")
        except Exception as e:
            print(f"❌ Error processing {svg_file.name}: {e}")

if __name__ == "__main__":
    generate_components()