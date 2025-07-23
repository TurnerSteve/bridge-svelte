<!-- 3_of_spades.svelte -->
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
  viewBox="32 0 192 256"
  fill={color}
  width={size}
  height={size}
  class={className}
   preserveAspectRatio="xMidYMid meet"
>
  <metadata id="metadata43"><rdf:rdf><cc:work><dc:format>image/svg+xml</dc:format><dc:type></dc:type><dc:title></dc:title></cc:work></rdf:rdf></metadata><defs id="defs41"></defs><sodipodi:namedview bordercolor="#666666" borderopacity="1" gridtolerance="10" guidetolerance="10" id="namedview39" objecttolerance="10" pagecolor="#ffffff" showgrid="false"></sodipodi:namedview><g id="Layer_x0020_1" style="fill-rule:nonzero;clip-rule:nonzero;stroke:#000000;stroke-miterlimit:4;">
<path d="M166.8369141,235.5478516c0,3.7773438-3.0869141,6.8691406-6.8710938,6.8691406H7.1108398c-3.7749023,0-6.8608398-3.0917969-6.8608398-6.8691406V7.1201172C0.25,3.3427734,3.3359375,0.25,7.1108398,0.25h152.8549805    c3.7841797,0,6.8710938,3.0927734,6.8710938,6.8701172v228.4277344z" id="path5" style="fill:#FFFFFF;stroke-width:0.5;"></path>
<g id="g7" style="stroke:none;">
<g id="g9">
</g>
</g>
<g id="g15">
</g>
<g id="g19">
</g>
<g id="g23" style="stroke:none;">
<g id="g25">
</g>
</g>
<g id="g31" style="stroke:none;">
<g id="g33">
</g>
</g>
</g><text id="text3788" style="font-size:32px;font-style:normal;font-weight:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" x="8.5467014" y="28.013288"><tspan id="tspan3790" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Arial;-inkscape-font-specification:Arial" x="8.5467014" y="28.013288">3</tspan></text><g id="layer1-7" transform="matrix(1.5085945,0,0,1.3793253,16.929104,45.065897)"><path d="M 7.989,3.103 C 7.747,-0.954 0.242,-8.59 0,-10.5 c -0.242,1.909 -7.747,9.545 -7.989,13.603 -0.169,2.868 1.695,4.057 3.39,4.057 1.8351685,-0.021581 3.3508701,-2.8006944 3.873,-3.341 0.242,0.716 -1.603,6.682 -2.179,6.682 l 5.811,0 C 2.33,10.501 0.485,4.535 0.727,3.819 1.1841472,4.3152961 2.5241276,7.0768295 4.601,7.16 6.295,7.159 8.158,5.971 7.989,3.103 z" id="sl" style="fill:#000000"></path></g><g id="layer1-7-88" transform="matrix(2.6486789,0,0,2.4217176,83.41089,49.365995)"><path d="M 7.989,3.103 C 7.747,-0.954 0.242,-8.59 0,-10.5 c -0.242,1.909 -7.747,9.545 -7.989,13.603 -0.169,2.868 1.695,4.057 3.39,4.057 1.8351685,-0.021581 3.3508701,-2.8006944 3.873,-3.341 0.242,0.716 -1.603,6.682 -2.179,6.682 l 5.811,0 C 2.33,10.501 0.485,4.535 0.727,3.819 1.1841472,4.3152961 2.5241276,7.0768295 4.601,7.16 6.295,7.159 8.158,5.971 7.989,3.103 z" id="sl-4" style="fill:#000000"></path></g><text id="text3788-7" style="font-size:32px;font-style:normal;font-weight:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:Bitstream Vera Sans" transform="scale(-1,-1)" x="-158.97775" y="-215.12402"><tspan id="tspan3790-6" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Arial;-inkscape-font-specification:Arial" x="-158.97775" y="-215.12402">3</tspan></text><g id="layer1-7-3" transform="matrix(-1.5085945,0,0,-1.3793253,150.22511,198.04408)"><path d="M 7.989,3.103 C 7.747,-0.954 0.242,-8.59 0,-10.5 c -0.242,1.909 -7.747,9.545 -7.989,13.603 -0.169,2.868 1.695,4.057 3.39,4.057 1.8351685,-0.021581 3.3508701,-2.8006944 3.873,-3.341 0.242,0.716 -1.603,6.682 -2.179,6.682 l 5.811,0 C 2.33,10.501 0.485,4.535 0.727,3.819 1.1841472,4.3152961 2.5241276,7.0768295 4.601,7.16 6.295,7.159 8.158,5.971 7.989,3.103 z" id="sl-1" style="fill:#000000"></path></g><g id="layer1-7-88-7" transform="matrix(-2.6486789,0,0,-2.4217176,83.45613,193.77132)"><path d="M 7.989,3.103 C 7.747,-0.954 0.242,-8.59 0,-10.5 c -0.242,1.909 -7.747,9.545 -7.989,13.603 -0.169,2.868 1.695,4.057 3.39,4.057 1.8351685,-0.021581 3.3508701,-2.8006944 3.873,-3.341 0.242,0.716 -1.603,6.682 -2.179,6.682 l 5.811,0 C 2.33,10.501 0.485,4.535 0.727,3.819 1.1841472,4.3152961 2.5241276,7.0768295 4.601,7.16 6.295,7.159 8.158,5.971 7.989,3.103 z" id="sl-4-5" style="fill:#000000"></path></g><g id="layer1-7-88-6" transform="matrix(2.6486789,0,0,2.4217176,83.494697,119.06732)"><path d="M 7.989,3.103 C 7.747,-0.954 0.242,-8.59 0,-10.5 c -0.242,1.909 -7.747,9.545 -7.989,13.603 -0.169,2.868 1.695,4.057 3.39,4.057 1.8351685,-0.021581 3.3508701,-2.8006944 3.873,-3.341 0.242,0.716 -1.603,6.682 -2.179,6.682 l 5.811,0 C 2.33,10.501 0.485,4.535 0.727,3.819 1.1841472,4.3152961 2.5241276,7.0768295 4.601,7.16 6.295,7.159 8.158,5.971 7.989,3.103 z" id="sl-4-8" style="fill:#000000"></path></g>
</svg>
