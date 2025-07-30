<script module lang="ts">
	export interface Props {
    suit: Suit ;
    displayMode: Deckview;
  }
</script>

<script lang="ts">
  import { Suit, Deckview } from '$lib/types/cards';
  import { suitSymbols } from '$lib/types/constants';

  // grab a typed props object
  const { suit, displayMode } = $props();

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
  {#if displayMode === Deckview.TEXT}
    <span style="width:16px; display:inline-block;">
      {suitSymbols[suit as Suit]}
    </span>
  {/if}
</div>
