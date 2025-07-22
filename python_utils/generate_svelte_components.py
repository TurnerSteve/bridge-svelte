import sys
from pathlib import Path

# This now creates svelte 5 module correctly. AI incapable of sorting it out.

# 🔧 Ensure root path is on sys.path
current_file = Path(__file__).resolve()
project_root = current_file.parent  # 'python_utils'
while not (project_root / ".git").exists() and project_root != project_root.parent:
    project_root = project_root.parent

if str(project_root) not in sys.path:
    sys.path.insert(0, str(project_root))

# ✅ Now safe to import
from python_utils.get_project_root import get_project_root



# Constants
SVG_SOURCE_DIR = get_project_root() / "src" / "assets" / "game-icons"
SVELTE_OUTPUT_DIR = get_project_root() / "src" / "lib" / "icons" / "game-icons"

# Template for the Svelte component using <script context="module">
SVELTE_TEMPLATE = """<!-- {filename}.svelte -->
<script module lang="ts" >
  export interface Props {
    size?: number;
    color?: string;
    class?: string;
  }
</script>

<script lang="ts">
  const { size = 24, color = 'currentColor', class: className = '' } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  fill={color}
  width={size}
  height={size}
  class={className}
>
  {svg_path_data}
</svg>
"""

def extract_path_data(svg_content: str) -> str:
    start = svg_content.find("<svg")
    end = svg_content.find("</svg>")
    if start == -1 or end == -1:
        raise ValueError("Invalid SVG format")

    inner = svg_content[start:end]
    first_gt = inner.find(">")
    return inner[first_gt + 1:]

def generate_components():
    if not SVG_SOURCE_DIR.exists():
        print(f"SVG source directory does not exist: {SVG_SOURCE_DIR}")
        return

    SVELTE_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for svg_file in SVG_SOURCE_DIR.glob("*.svg"):
        try:
            name = svg_file.stem.replace("card-", "").replace("-", "_").capitalize()
            svelte_file = SVELTE_OUTPUT_DIR / f"{name}.svelte"

            with open(svg_file, "r", encoding="utf-8") as f:
                raw_svg = f.read()

            path_data = extract_path_data(raw_svg)

            with open(svelte_file, "w", encoding="utf-8") as f:
              f.write(
                SVELTE_TEMPLATE
                .replace("{svg_path_data}", path_data)
                .replace("{filename}", name)
    )

            print(f"✅ Generated: {svelte_file.name}")

        except Exception as e:
            print(f"❌ Error processing {svg_file.name}: {e}")

if __name__ == "__main__":
    generate_components()