<!-- CentreBoard.svelte -->
<script module lang="ts">
	export type ComponentProps = {
		boardId: number;
		size: number;
	};
</script>

<script lang="ts">
	import DealSelectorComponent from '$lib/components/dealDisplay/DealSelectorComponent.svelte';
	import MultiDealController from './MultiDealController.svelte';

	import HandRenderer from '$lib/components/renderers/HandRenderer.svelte';
	import CentreBoard from '$lib/components/dealDisplay/CentreBoardComponent.svelte';

	import { DeckView, Direction } from '$lib/types/cards';
	import type { Board } from '$lib/types/structs';

	// Our store
	import { storedDeals, dealPointer } from '$lib/stores/dealStore';
	import { deckView } from '$lib/stores/deckView';

	// Get all deals from the store (using $store syntax for auto-reactivity)
	const deals = $derived(() => [storedDeals, (deals: Board[]) => deals ?? []]);

	const pointer = $derived(() => [
		dealPointer,
		deals,
		(pointer: number, deals: Board[]) => Math.max(0, Math.min(pointer, deals.length - 1))
	]);

	const deal = $derived(() => [
		deals,
		pointer,
		(deals: Board[], pointer: number) => deals[pointer] ?? null
	]);

	const northHand = $derived(() => [deal, (deal: Board | null) => deal?.deal?.[Direction.NORTH]]);
	const southHand = $derived(() => [deal, (deal: Board | null) => deal?.deal?.[Direction.SOUTH]]);
	const eastHand = $derived(() => [deal, (deal: Board | null) => deal?.deal?.[Direction.EAST]]);
	const westHand = $derived(() => [deal, (deal: Board | null) => deal?.deal?.[Direction.WEST]]);

	function handlePointerChange(newPointer: number) {
		dealPointer.set(newPointer);
	}

	// turn the writable store into a callable signal
	const displayMode = $derived(() => [deckView, (mode: DeckView) => mode]);

	const maxDeal = $derived(() => [deals, (deals : Board[]) => deals.length - 1]);
</script>

{#if deals().length === 0 || !deal()}
	<div>Loading deals...</div>
{:else}
	<div class="flex min-h-screen w-full flex-col items-center justify-center">
		<div class="grid w-full max-w-screen-xl grid-cols-3 grid-rows-3 gap-4">
			<!-- Deal Selector (top-left) -->
			<div class="col-start-1 row-start-1 flex items-center justify-center">
				<DealSelectorComponent
					dealPointer={pointer()}
					maxDeal={maxDeal()}
					updateDealPointer={handlePointerChange}
				/>
			</div>

			<!-- MultiDealController (top-right) -->
			<div class="col-start-3 row-start-1 flex items-center justify-center">
				<MultiDealController />
			</div>

			<!-- CentreBoard (center) -->
			<div class="col-start-2 row-start-2 flex items-center justify-center">
				<CentreBoard boardId={pointer()} size={200} />
			</div>

			<!-- North hand (top-center) -->
			<div class="col-start-2 row-start-1 flex items-center justify-center">
				{#if northHand()}
					<HandRenderer
						hand={northHand()}
						displayMode={displayMode()}
						direction={Direction.NORTH}
						cardSize={40}
					/>
				{/if}
			</div>

			<!-- West hand (middle-left) -->
			<div class="col-start-1 row-start-2 flex items-center justify-center">
				{#if westHand()}
					<HandRenderer
						hand={westHand()}
						displayMode={displayMode()}
						direction={Direction.WEST}
						cardSize={40}
					/>
				{/if}
			</div>

			<!-- East hand (middle-right) -->
			<div class="col-start-3 row-start-2 flex items-center justify-center">
				{#if eastHand()}
					<HandRenderer
						hand={eastHand()}
						displayMode={displayMode()}
						direction={Direction.EAST}
						cardSize={40}
					/>
				{/if}
			</div>

			<!-- South hand (bottom-center) -->
			<div class="col-start-2 row-start-3 flex items-center justify-center">
				{#if southHand()}
					<HandRenderer
						hand={southHand()}
						displayMode={displayMode()}
						direction={Direction.SOUTH}
						cardSize={40}
					/>
				{/if}
			</div>
		</div>
	</div>
{/if}
