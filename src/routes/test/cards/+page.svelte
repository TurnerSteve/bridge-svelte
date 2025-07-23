<script lang="ts">
	import PlayingCardRenderer from './CardRenderer.svelte';
	import { toFullRankTokens, toFullSuit } from './cardMapper';

	const hand = {
		S: 'AKQJT987654321',
		H: 'AKQJ1098765432',
		D: 'akqj1098765432',
		C: 'AKQJ1098765432'
	};

	const suits = ['S', 'H', 'D', 'C'] as const;
</script>

<div class="flex flex-col gap-2">
	{#each suits as suit}
		<div class="flex items-center gap-1">
			<!--  -->
			{#each toFullRankTokens(hand[suit].split('')) as fullRank}
				<PlayingCardRenderer rank={fullRank} suit={toFullSuit(suit)} />
			{/each}
		</div>
	{/each}
</div>