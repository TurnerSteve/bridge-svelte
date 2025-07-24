<!-- ace_of_diamonds.svelte -->
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
  <defs><radialgradient cx="171.487" cy="511.223" fx="171.487" fy="511.223" gradienttransform="rotate(-30.306 382.42 566.552)scale(1.3355 .78241)" gradientunits="userSpaceOnUse" id="d" r="81.903"></radialgradient><radialgradient cx="0" cy="-3.234" fx="0" fy="-3.234" gradienttransform="rotate(179.719 -.002 -5.114)scale(1.12243 1.85033)" gradientunits="userSpaceOnUse" id="c" r="8"></radialgradient><lineargradient id="b"><stop offset="0" style="stop-color:#df0000;stop-opacity:1"></stop><stop offset="1" style="stop-color:#df0000;stop-opacity:.64122134"></stop></lineargradient><lineargradient id="a"><stop offset="0" style="stop-color:#fff;stop-opacity:.4351145"></stop><stop offset="1" style="stop-color:#000;stop-opacity:0"></stop></lineargradient><filter color-interpolation-filters="sRGB" height="1.325" id="e" width="1.279" x="-.139" y="-.162"><fegaussianblur stddeviation="9.511"></fegaussianblur></filter></defs><g style="fill-rule:nonzero;clip-rule:nonzero;stroke:#000;stroke-miterlimit:4"><path d="M166.837 235.548c0 3.777-3.087 6.869-6.871 6.869H7.11c-3.775 0-6.861-3.092-6.861-6.87V7.12C.25 3.343 3.336.25 7.11.25h152.856c3.784 0 6.87 3.093 6.87 6.87z" style="fill:#fff;stroke-width:.5"></path></g><text style="font-size:32px;font-style:normal;font-weight:400;line-height:125%;letter-spacing:0;word-spacing:0;fill:#df0000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="6.246" y="28.013"><tspan style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:Arial;-inkscape-font-specification:Arial;fill:#df0000;fill-opacity:1" x="6.246" y="28.013">A</tspan></text><text style="font-size:32px;font-style:normal;font-weight:400;line-height:125%;letter-spacing:0;word-spacing:0;fill:#df0000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" transform="scale(-1)" x="-161.088" y="-213.515"><tspan style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;fill:#df0000;fill-opacity:1;font-family:Arial;-inkscape-font-specification:Arial" x="-161.088" y="-213.515">A</tspan></text><path d="M3.243-4.725C1.126-7.59 0-10.5 0-10.5s-1.126 2.91-3.243 5.775C-5.361-1.862-8 0-8 0s2.639 1.861 4.757 4.726C-1.126 7.59 0 10.5 0 10.5s1.126-2.91 3.243-5.774C5.361 1.861 8 0 8 0S5.361-1.862 3.243-4.725" style="fill:url(#c);fill-opacity:1" transform="translate(82.284 116.888)scale(5.95137)"></path><path d="M117.301 604.266s-8.067-94.95 22.857-122.857c34.761-31.369 140-11.429 140-11.429s-71.54 24.838-100 48.572c-27.21 22.692-62.857 85.714-62.857 85.714" style="fill:url(#d);fill-opacity:1;stroke:none;filter:url(#e)" transform="rotate(170.814 56.848 117.838)scale(.25234 .26133)"></path><path d="M3.243-4.725C1.126-7.59 0-10.5 0-10.5s-1.126 2.91-3.243 5.775C-5.361-1.862-8 0-8 0s2.639 1.861 4.757 4.726C-1.126 7.59 0 10.5 0 10.5s1.126-2.91 3.243-5.774C5.361 1.861 8 0 8 0S5.361-1.862 3.243-4.725" style="fill:#df0000" transform="translate(16.968 44.236)scale(1.4769)"></path><path d="M3.243-4.725C1.126-7.59 0-10.5 0-10.5s-1.126 2.91-3.243 5.775C-5.361-1.862-8 0-8 0s2.639 1.861 4.757 4.726C-1.126 7.59 0 10.5 0 10.5s1.126-2.91 3.243-5.774C5.361 1.861 8 0 8 0S5.361-1.862 3.243-4.725" style="fill:#df0000" transform="translate(150.62 198.503)scale(1.4769)"></path>
</svg>
