# python_utils/process_svg_cards.py

import sys
from pathlib import Path
from bs4 import BeautifulSoup

# Step up to project root before importing
current_file = Path(__file__).resolve()
project_root = current_file.parent.parent  # this goes up from python_utils/
sys.path.insert(0, str(project_root))

from python_utils.get_project_root import get_project_root

# ---- CONFIG ----
INPUT_DIR = get_project_root() / "src" / "assets" / "full-cards"
OUTPUT_DIR = get_project_root() / "src" / "lib" / "icons" / "processed-cards"

SVELTE_TEMPLATE = """<!-- {filename}.svelte -->
<script module lang="ts">
  export interface Props {{
    size?: number;
    color?: string;
    class?: string;
  }}
</script>

<script lang="ts">
  const {{ size = 24, color = 'currentColor', class: className = '' }} = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="{viewBox}"
  fill={{color}}
  width={{size}}
  height={{size}}
  class={{className}}
>
{svg_content}
</svg>
"""

def extract_svg_inner(file_path: Path):
    with file_path.open("r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "xml")
        svg = soup.find("svg")

        if not svg:
            raise ValueError(f"SVG tag not found in {file_path.name}")

        viewBox = svg.get("viewBox", "64 0 384 512")
        inner_html = "".join(str(child) for child in svg.find_all(recursive=False))
        return viewBox, inner_html.strip()

def generate_svelte_components():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for svg_file in INPUT_DIR.glob("*.svg"):
        try:
            viewBox, svg_inner = extract_svg_inner(svg_file)
            base_name = svg_file.stem
            component_name = base_name.replace("-", "_")

            component_path = OUTPUT_DIR / f"{component_name}.svelte"
            content = SVELTE_TEMPLATE.format(
                filename=component_name,
                viewBox=viewBox.strip(),
                svg_content=svg_inner,
            )

            with component_path.open("w", encoding="utf-8") as f:
                f.write(content)

            print(f"✅ {component_path.name}")

        except Exception as e:
            print(f"❌ {svg_file.name}: {e}")

if __name__ == "__main__":
    generate_svelte_components()