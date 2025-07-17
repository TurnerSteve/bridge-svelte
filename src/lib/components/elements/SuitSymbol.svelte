<script lang="ts">
  import { Suit, DeckView } from '$lib/types/cards';
  import { suitSymbols } from '$lib/types/constants';

  // grab a typed props object
  const props = $props<{ 
    suit: Suit ;
    displayMode: DeckView;
  }>();
  const suit  = props.suit as Suit;
  const displayMode = props.displayMode as DeckView;

  // local derived state
  const isRed = $derived(() => 
    suit === Suit.HEARTS || suit === Suit.DIAMONDS
  );

</script>

<div
  style="
    width:16px;
    text-align:center;
    color:{isRed() ? 'red' : 'black'};
    font-weight:bold;
  "
>
  {#if displayMode === DeckView.TEXT}
    <span style="width:16px; display:inline-block;">
      {suitSymbols[suit]}
    </span>
  {/if}
</div>
