<!-- 6_of_hearts.svelte -->
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
  <g style="fill-rule:nonzero;clip-rule:nonzero;stroke:#000;stroke-miterlimit:4"><path d="M166.837 235.548c0 3.777-3.087 6.869-6.871 6.869H7.11c-3.775 0-6.861-3.092-6.861-6.87V7.12C.25 3.343 3.336.25 7.11.25h152.856c3.784 0 6.87 3.093 6.87 6.87z" style="fill:#fff;stroke-width:.5"></path></g><text style="font-size:32px;font-style:normal;font-weight:400;line-height:125%;letter-spacing:0;word-spacing:0;fill:#df0000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="8.775" y="28.013"><tspan style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;fill:#df0000;fill-opacity:1;font-family:Arial;-inkscape-font-specification:Arial" x="8.775" y="28.013">6</tspan></text><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(1.6743 0 0 1.567 17.178 46.385)"></path><text style="font-size:32px;font-style:normal;font-weight:400;line-height:125%;letter-spacing:0;word-spacing:0;fill:#df0000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" transform="scale(-1)" x="-158.818" y="-213.515"><tspan style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;fill:#df0000;fill-opacity:1;font-family:Arial;-inkscape-font-specification:Arial" x="-158.818" y="-213.515">6</tspan></text><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(-1.6743 0 0 -1.567 150.156 195.143)"></path><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(2.779 0 0 2.60089 57.712 47.604)"></path><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(-2.779 0 0 -2.60089 57.712 192.006)"></path><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(2.779 0 0 2.60089 57.712 118.905)"></path><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(2.779 0 0 2.60089 109.05 47.273)"></path><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(-2.779 0 0 -2.60089 109.05 191.675)"></path><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(2.779 0 0 2.60089 109.05 118.574)"></path>
</svg>
