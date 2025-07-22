<!-- src/routes/test/PngCardTest.svelte -->

<script lang="ts">
	import CardPngRenderer from '$lib/components/renderers/CardPngRenderer.svelte';
	import { rankOrder, suitOrder } from '$lib/types/constants';

	import { Rank } from '$lib/types/cards';

	const rankList = (Object.keys(rankOrder) as Rank[]).sort((a, b) => rankOrder[a] - rankOrder[b]);
</script>

<h1 class="mb-4 text-lg font-bold">PNG Card Rendering Test</h1>

{#each suitOrder as suit}
	<div class="mb-2 flex items-center gap-1">
		<span class="w-12 text-sm font-bold"></span>
		{#each rankList as rank}
			<CardPngRenderer {rank} {suit} size={40} />
		{/each}
	</div>
{/each}
