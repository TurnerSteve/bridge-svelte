<script lang="ts">
	import BridgeDealGrid from './BridgeDealGrid.svelte';

	import { Direction } from '$lib/types/cards';

	import { getTrayInfo } from '$lib/bridge/utils';
	import { storedDeals } from '$lib/stores/dealStore';
	import { deckView } from '$lib/stores/deckView';

	// --- Pull current deal data ---
	const deal = $storedDeals[0];
	const info = getTrayInfo(deal.boardNo);
	const displayMode = $deckView;

	// -- Pass primitive/data props to grid --
	const gridProps = {
		boardNo: deal.boardNo,
		algo: deal.algo,
		vulnerability: info.vulnerability,
		dealer: info.dealer,
		displayMode,
		northHand: deal.deal[Direction.NORTH],
		southHand: deal.deal[Direction.SOUTH],
		eastHand: deal.deal[Direction.EAST],
		westHand: deal.deal[Direction.WEST]
	};
</script>

<BridgeDealGrid {...gridProps} />
