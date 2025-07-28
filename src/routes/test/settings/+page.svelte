<script lang="ts">
	import { algorithm } from '$lib/stores';

	import { storedDeals, dealPointer } from '$lib/stores';
	import { deckview } from '$lib/stores';
	import { multiDealSize } from '$lib/stores';
	import { partialDealSlots } from '$lib/stores';

	const algo = $algorithm;
	const dealIndex = $dealPointer;
	const viewType = $deckview;

	const maxDeals = $multiDealSize;
	const slots = $partialDealSlots;
</script>

<div class="mx-auto mt-10 max-w-xl text-center">
	<h1 class="mb-4 text-4xl font-bold">Contents of Global Stores</h1>

	<div>Algorithm : {algo}</div>
	<div>Deal Index : {dealIndex}</div>
	<div>ViewType : {viewType}</div>
	<div>Max Deals : {maxDeals}</div>
	<div>Slots : [{slots}] </div>

	<p>Number of stored deals: {$storedDeals.length}</p>

	{#each $storedDeals as deal}
		<div>
			Board {deal.boardNo} - {deal.description}
			<!-- ... -->
		</div>
	{/each}
</div>
