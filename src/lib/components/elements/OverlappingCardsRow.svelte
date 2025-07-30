<script module lang="ts">
	export interface Props {
		suit: Suit;
		cards: Rank[];
		cardSize: number;
		overlapPercent: number;
		displayMode: Deckview;
	}
</script>


<script lang="ts">
	import { Suit, Rank, Deckview } from '$lib/types/cards';
	import CardRenderer from '$lib/components/renderers/CardRenderer.svelte';

	// Pass as props
	const { suit, cards, cardSize, overlapPercent, displayMode } = $props();

	// local derived state
	const overlap = $derived(() => overlapPercent / 100);
	const width = $derived(() => cardSize + (cards.length - 1) * (cardSize * overlap()));

</script>

<div class="relative" style="height: {cardSize}px; width: {width()}px;">
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
			<CardRenderer {suit} {rank} view={displayMode} size={cardSize} />
		</div>
	{/each}
</div>
