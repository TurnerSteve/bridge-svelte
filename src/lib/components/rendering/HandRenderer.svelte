<script lang="ts">
  import { Direction, DeckView, Suit } from '$lib/types/cards';
  import { suitOrder, suitSymbols } from '$lib/types/constants';
  import type { HandStruct } from '$lib/types/structs';
  import CardRenderer from './CardRenderer.svelte';

  export let hand: HandStruct;
  export let displayMode: DeckView;
  export let direction: Direction;
  export let cardSize: number = 40;
</script>

<div>
  <div style="font-weight: bold; margin-bottom: 8px;">
    {direction}
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px;">
    {#each suitOrder as suit}
      <div style="display: flex; align-items: center; gap: 4px;">
        {#if displayMode === DeckView.TEXT}
          <span
            style="
              width: 16px;
              text-align: center;
              color: {suit === Suit.HEARTS || suit === Suit.DIAMONDS ? 'red' : 'black'};
              font-weight: bold;
            "
          >
            {suitSymbols[suit]}
          </span>
        {/if}
        <div style="display: flex; gap: 0;">
          {#each hand[suit] as rank}
            <CardRenderer
              {suit}
              {rank}
              {displayMode}
              size={cardSize}
            />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>