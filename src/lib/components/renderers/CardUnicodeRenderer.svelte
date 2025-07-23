<!-- CardUnicodeRenderer.svelte -->
<script module lang="ts">
  export interface Props {
    symbol: string;
    size?: number;
    color?: string;
    class?: string;
  }
</script>

<script lang="ts">
  const { symbol, size = 32 } = $props();
</script>

<span
  class="inline-block"
  style="
    transform: scale({size});
    transform-origin: center;
    font-family: 'Segoe UI Symbol', 'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji';
    display: inline-block;
    line-height: 1;
  "
>
  {symbol}
</span>