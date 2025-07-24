
<script module lang="ts">
	export interface iProps {
    hand: HandStruct;
    displayMode: DeckView;
    direction: Direction;
    cardSize?: number;
    overlapPercent?: number;
	}
</script>


<script lang="ts">
  import { DeckView, Direction } from '$lib/types/cards';
  import { suitOrder } from '$lib/types/constants';
  import type { HandStruct } from '$lib/types/structs';
  import CompactSuitRow from '../elements/CompactSuitRow.svelte';

const { hand, displayMode, direction, cardSize = 50, overlapPercent = 15}:iProps = $props();

  // Ensure that the card size is a positive number
  if (cardSize <= 0) {
    throw new Error('Card size must be a positive number');
  }


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