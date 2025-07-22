<!-- CardRenderer.svelte -->
<script lang="ts" module>
  export interface Props {
    suit: Suit;
    rank: Rank;
    view: DeckView;
    size?: number;
  }
</script>

<script lang="ts">

  import { DeckView, Suit, Rank } from '$lib/types/cards';
  import { unicodeCards } from '$lib/data/unicodeCards';
  import { svgCards } from '$lib/data/svgCards';
  import { iconCards } from '$lib/data/iconCards';
  import { pngCards } from '$lib/data/pngCards';

  const { suit, rank, view, size = 48 } = $props();
  const isRed = suit === Suit.HEARTS || suit === Suit.DIAMONDS;

  const componentMap = {
    [DeckView.UNICODE]: () => unicodeCards[suit]?.[rank] ?? '?',
    [DeckView.SVG]: () => svgCards[suit]?.[rank],
    [DeckView.ICON]: () => iconCards[suit]?.[rank],
    [DeckView.PNG]: () => `/cards/png/${suit}-${rank}.png`,
    [DeckView.TEXT]: () => `${rank}${suit}`
  };
</script>

{#if view === DeckView.UNICODE || view === DeckView.TEXT}
  <span
    class="inline-block"
    style="font-size: {size}px; color: {isRed ? '#c00' : '#222'}"
  >
    {componentMap[view]()}
  </span>

{:else if view === DeckView.PNG}
  <img
    src={componentMap[DeckView.PNG]()}
    alt="{rank} of {suit}"
    width={size}
    height={Math.round(size * 1.5)}
    style="display: inline-block; vertical-align: middle;"
  />

{:else}
  {#if componentMap[view]()}
    {@render componentMap[view]()}
  {:else}
    <span>?</span>
  {/if}
{/if}