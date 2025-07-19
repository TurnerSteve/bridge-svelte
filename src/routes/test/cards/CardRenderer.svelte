<script lang="ts">
	import CardImage from './CardImage.svelte';
	import type { FullRank, FullSuit } from './cardMapper';

	const { rank, suit } = $props<{ rank: FullRank; suit: FullSuit }>();
</script>

<CardImage {rank} {suit} />