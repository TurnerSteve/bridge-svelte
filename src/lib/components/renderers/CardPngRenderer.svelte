<!-- src/lib/components/renderers/CardPngRenderer.svelte -->
<!-- Probably this is not required longterm, but for now we need a separate PNG renderer -->

<script module lang="ts">
  import type { Rank, Suit } from '$lib/types/cards';

  export interface Props {
    rank: Rank;
    suit: Suit;
    size?: number;
    class?: string;
  }
</script>

<script lang="ts">
  const { rank, suit, size = 100, class: className = '' } = $props();
  import { pngCards } from '$lib/data';

  const imgUrl = pngCards(rank, suit);
</script>

<span
  class={`inline-block border border-gray-400 rounded-sm ${className}`}
  style="width: {size}px; height: {size * 1.5}px"
>
  <img
    src={imgUrl}
    alt="{rank} of {suit}"
    width={size}
    height={Math.round(size * 1.5)}
    style="object-fit: contain; width: 100%; height: 100%"
    loading="lazy"
    draggable="false"
  />
</span>