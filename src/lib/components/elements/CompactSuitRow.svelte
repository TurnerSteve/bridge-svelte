<script lang="ts">
	import { Suit, Rank, DeckView } from '$lib/types/cards';
	import OverlappingCardsRow from './OverlappingCardsRow.svelte';
	import SuitSymbol from './SuitSymbol.svelte';

	export let suit: Suit;
	export let cards: Rank[] = [];
	export let displayMode: DeckView;
	export let cardSize: number = 40;
	export let overlapPercent: number = 16;

	// Calculate width for overlapped cards
	$: totalCards = cards.length;
	$: overlapFraction = overlapPercent / 100;
	$: containerWidth = cardSize + (totalCards - 1) * cardSize * overlapFraction;
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
	<SuitSymbol {suit} {displayMode} />
	<OverlappingCardsRow {suit} {cards} {displayMode} cardSize={24} overlapPercent={20} />
</span>
