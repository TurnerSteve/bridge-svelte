<script module lang="ts">
	export interface iProps {
		suit: Suit;
		cards: Rank[];
		displayMode: DeckView;
		cardSize?: number;
		overlapPercent?: number;
	}
</script>	

<script lang="ts">
	import { Suit, Rank, DeckView } from '$lib/types/cards';
	import OverlappingCardsRow from './OverlappingCardsRow.svelte';
	import SuitSymbol from './SuitSymbol.svelte';

	const {
		suit,
		cards = [],
		displayMode,
		cardSize = 40, 
		overlapPercent = 16
	} : iProps = $props ();

	// Calculate width for overlapped cards
	const totalCards = cards.length;
	const overlapFraction = overlapPercent / 100;
	const containerWidth = cardSize + (totalCards - 1) * cardSize * overlapFraction;

</script>

<span
	style="
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
    height: {cardSize}px;
    width: {containerWidth}px;
  "
>
	<SuitSymbol {suit} displayMode = {displayMode} />
	<OverlappingCardsRow {suit} {cards} {displayMode} cardSize={24} overlapPercent={20} />
</span>
