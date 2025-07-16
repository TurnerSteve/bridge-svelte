<script lang="ts">
  import { Suit, Rank, DeckView } from '$lib/types/cards';
  import CardRenderer from '../rendering/CardRenderer.svelte';

  export let suit: Suit;
  export let cards: Rank[];
  export let displayMode: DeckView;
  export let cardSize: number;
  export let overlapPercent: number;

  $: overlap = overlapPercent / 100;
  $: width = cardSize + (cards.length - 1) * (cardSize * overlap);
</script>

<div
  class="relative"
  style="height: {cardSize}px; width: {width}px;"
>
  {#each cards as rank, i}
    <div
      class="absolute"
      style="
        left: {i * overlapPercent}%;
        z-index: {i};
        width: {cardSize}px;
        height: {cardSize}px;
      "
    >
      <CardRenderer
        {suit}
        {rank}
        {displayMode}
        size={cardSize}
      />
    </div>
  {/each}
</div>