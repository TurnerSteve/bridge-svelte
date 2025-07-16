<script lang="ts">
  import { Suit, DeckView } from '$lib/types/cards';
  import { suitSymbols } from '$lib/types/constants';
  export let suit: Suit;
  export let displayMode: DeckView;

  $: isRed = suit === Suit.HEARTS || suit === Suit.DIAMONDS;
</script>

<div
  style="
    width: 16px;
    text-align: center;
    color: {isRed ? 'red' : 'black'};
    font-weight: bold;
  "
>
  {#if displayMode === DeckView.TEXT}
    <span style="width: 16px; display: inline-block;">
      {suitSymbols[suit]}
    </span>
  {/if}
</div>
