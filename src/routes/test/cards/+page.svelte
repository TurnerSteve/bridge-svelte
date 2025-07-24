<script lang="ts">
	import CardRenderer from '$lib/components/renderers/CardRenderer.svelte';
	import { DeckView } from '$lib/types/cards';
	import { toFullRankTokens, toFullSuit } from './cardMapper';

	const hand = {
		S: 'AKQJT98765432',
		H: 'AKQJ1098765432',
		D: 'akqj1098765432',
		C: 'AKQJ1098765432'
	};

	const suits = ['S', 'H', 'D', 'C'] as const;
	const CARD_SIZE =128;
</script>

<div class="flex flex-col gap-2">
	{#each suits as suit}
		<div class="flex items-center gap-1">
			{#each toFullRankTokens(hand[suit].split('')) as rank}
				<CardRenderer suit={toFullSuit(suit)} rank={rank} size={CARD_SIZE} view={DeckView.SVG1} />
			{/each}
			<!-- Swap in UNICODE, PNG, SVG1, SVG2, ICON or TEXT -->
		</div>
	{/each}
</div>