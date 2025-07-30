<script lang="ts">
	import { createBoard } from '$lib/bridge/utils/createBoard';

	import { onMount } from 'svelte';
	import { Card, CardContent } from '$lib/components/ui/card';

	// global stores
	import { algorithm } from '$lib/stores/algorithm';
	import { partialDealSlots } from '$lib/stores/partialDealSlots';
	import { storedDeals, updateDeal } from '$lib/stores/dealStore';
	import DealButton from '$lib/components/multi-ui/DealButton.svelte';

	// On mount, force a single deal if none exists
	onMount(() => {
		const boardNo = 0;
		console.log(`Board ${boardNo} uses algo "${$algorithm}" and slots[${$partialDealSlots}]`);

		if ($storedDeals.length === 0) {
			const board = createBoard(boardNo, $algorithm, $partialDealSlots);
			updateDeal(0, board);
		}
	});

	function performDeal() {
		const newBoardNo = ($storedDeals[0].boardNo % 16) + 1;
		const board = createBoard(newBoardNo, $algorithm, $partialDealSlots);
		const len = $storedDeals.length;
		console.log(`New Board[${len}:${newBoardNo}] using algo "${$algorithm}"`);
		updateDeal(0, board);
	}
</script>

<div class="w-full px-5">
	<Card class="w-full px-5">
		<CardContent>
			<DealButton icon="game-icons:card-play" label="Deal" onclick={performDeal} />
		</CardContent>
	</Card>
</div>
