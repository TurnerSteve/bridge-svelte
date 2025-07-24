<!-- ace_of_hearts.svelte -->
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
  <defs><radialgradient cx="-.206" cy="-4.579" fx="-.206" fy="-4.579" gradienttransform="matrix(-1 0 0 -1.72018 -.412 -13.027)" gradientunits="userSpaceOnUse" id="d" r="8"></radialgradient><radialgradient cx="171.487" cy="511.223" fx="171.487" fy="511.223" gradienttransform="rotate(-30.306 382.42 566.552)scale(1.3355 .78241)" gradientunits="userSpaceOnUse" id="e" r="81.903"></radialgradient><radialgradient cx="159.354" cy="492.632" fx="159.354" fy="492.632" gradienttransform="matrix(1.08948 -.71514 .44645 .65627 -244.933 290.918)" gradientunits="userSpaceOnUse" id="g" r="81.903"></radialgradient><lineargradient id="a"><stop offset="0" style="stop-color:#df0000;stop-opacity:1"></stop><stop offset="1" style="stop-color:#df0000;stop-opacity:.67175573"></stop></lineargradient><lineargradient id="b"><stop offset="0" style="stop-color:#fff;stop-opacity:.31297711"></stop><stop offset="1" style="stop-color:#000;stop-opacity:0"></stop></lineargradient><lineargradient id="c"><stop offset="0" style="stop-color:#fff;stop-opacity:.29007635"></stop><stop offset="1" style="stop-color:#000;stop-opacity:0"></stop></lineargradient><filter color-interpolation-filters="sRGB" height="1.325" id="f" width="1.279" x="-.139" y="-.162"><fegaussianblur stddeviation="9.511"></fegaussianblur></filter><filter color-interpolation-filters="sRGB" height="1.325" id="h" width="1.279" x="-.139" y="-.162"><fegaussianblur stddeviation="9.511"></fegaussianblur></filter></defs><g style="fill-rule:nonzero;clip-rule:nonzero;stroke:#000;stroke-miterlimit:4"><path d="M166.837 235.548c0 3.777-3.087 6.869-6.871 6.869H7.11c-3.775 0-6.861-3.092-6.861-6.87V7.12C.25 3.343 3.336.25 7.11.25h152.856c3.784 0 6.87 3.093 6.87 6.87z" style="fill:#fff;stroke-width:.5"></path></g><text style="font-size:32px;font-style:normal;font-weight:400;line-height:125%;letter-spacing:0;word-spacing:0;fill:#df0000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="6.246" y="28.013"><tspan style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:Arial;-inkscape-font-specification:Arial;fill:#df0000;fill-opacity:1" x="6.246" y="28.013">A</tspan></text><g style="stroke:none"><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:url(#d);fill-opacity:1;stroke:none" transform="matrix(6.8256 0 0 6.38811 83.142 122.273)"></path></g><path d="M117.301 604.266s-8.067-94.95 22.857-122.857c34.761-31.369 140-11.429 140-11.429s-71.54 24.838-100 48.572c-27.21 22.692-62.857 85.714-62.857 85.714" style="fill:url(#e);fill-opacity:1;stroke:none;filter:url(#f)" transform="matrix(.2922 0 0 .3026 -4.335 -71.839)"></path><path d="M117.301 604.266s-8.067-94.95 22.857-122.857c34.761-31.369 140-11.429 140-11.429s-63.092 37.07-91.552 60.805c-27.21 22.692-71.305 73.481-71.305 73.481" style="fill:url(#g);fill-opacity:1;stroke:none;filter:url(#h)" transform="matrix(.22705 .0665 -.06483 .27594 94.814 -72.097)"></path><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(1.6743 0 0 1.567 17.178 46.385)"></path><text style="font-size:32px;font-style:normal;font-weight:400;line-height:125%;letter-spacing:0;word-spacing:0;fill:#df0000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" transform="scale(-1)" x="-161.088" y="-213.515"><tspan style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;fill:#df0000;fill-opacity:1;font-family:Arial;-inkscape-font-specification:Arial" x="-161.088" y="-213.515">A</tspan></text><path d="M3.676-9C.433-9 0-5.523 0-5.523S-.433-9-3.676-9C-5.946-9-8-7.441-8-4.5-8-.614-1.42 3.294 0 9 1.352 3.299 8-.614 8-4.5 8-7.441 5.946-9 3.676-9" style="fill:#df0000;fill-opacity:1" transform="matrix(-1.6743 0 0 -1.567 150.156 195.143)"></path>
</svg>
