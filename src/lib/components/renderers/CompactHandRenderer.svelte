<script lang="ts">
  import { DeckView, Direction } from '$lib/types/cards';
  import { suitOrder } from '$lib/types/constants';
  import type { HandStruct } from '$lib/types/structs';
  import CompactSuitRow from '../elements/CompactSuitRow.svelte';

  export let hand: HandStruct;
  export let displayMode: DeckView;
  export let direction: Direction;
  export let cardSize: number = 50;
  export let overlapPercent: number = 15;
</script>

<div>
  <div style="font-weight: bold; margin-bottom: 8px;">{direction}</div>
  <div style="display: flex; flex-direction: column; gap: 4px;">
    {#each suitOrder as suit}
      <CompactSuitRow
        suit={suit}
        cards={hand[suit]}
        {displayMode}
        {cardSize}
        {overlapPercent}
      />
    {/each}
  </div>
</div>