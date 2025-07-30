
<script lang="ts">
	import { derived } from 'svelte/store';
	import { storedDeals, dealPointer } from '$lib/stores/dealStore';
	import { deckview } from '$lib/stores';
	import { Direction } from '$lib/types/cards';

	import MultiDealController from './MultiDealController.svelte';
	import HandRenderer from '$lib/components/renderers/HandRenderer.svelte';
	import CentreBoard from './CentreBoardComponent.svelte';

	// 2. Derive an always-defined array of deals
	const deals = derived(storedDeals, ($storedDeals) => $storedDeals);

	// 3. Clamp the pointer to [0, deals.length-1]
	const pointer = derived([dealPointer, deals], ([$dealPointer, $deals]) =>
		Math.max(0, Math.min($dealPointer, $deals.length - 1))
	);

	// 4. Pick the current deal or null
	const deal = derived([deals, pointer], ([$deals, $pointer]) => $deals[$pointer] ?? null);

	// 5. Extract each direction’s hand (or null)
	const northHand = derived(deal, ($deal) => $deal?.deal?.[Direction.NORTH] ?? null);
	const southHand = derived(deal, ($deal) => $deal?.deal?.[Direction.SOUTH] ?? null);
	const eastHand = derived(deal, ($deal) => $deal?.deal?.[Direction.EAST] ?? null);
	const westHand = derived(deal, ($deal) => $deal?.deal?.[Direction.WEST] ?? null);

	// 7. Display mode passes straight through
	const displayMode = deckview;

</script>

{#if $deals.length === 0 || !$deal}
  <div>Loading deals…</div>
{:else}
  <div class="flex min-h-screen w-full flex-col items-center justify-center">
    <div class="grid w-full max-w-screen-xl grid-cols-3 grid-rows-3 gap-4">


      <!-- MultiDealController (top-right) -->
      <div class="col-start-3 row-start-1 flex items-center justify-center">
        <MultiDealController />
      </div>

      <!-- CentreBoard (center) -->
      <div class="col-start-2 row-start-2 flex items-center justify-center">
        <CentreBoard boardId={$pointer} size={200} />
      </div>

      <!-- North hand (top-center) -->
      <div class="col-start-2 row-start-1 flex items-center justify-center">
        {#if $northHand}
          <HandRenderer
            hand={$northHand}
            displayMode={$displayMode}
            direction={Direction.NORTH}
            cardSize={40}
          />
        {/if}
      </div>

      <!-- West hand (middle-left) -->
      <div class="col-start-1 row-start-2 flex items-center justify-center">
        {#if $westHand}
          <HandRenderer
            hand={$westHand}
            displayMode={$displayMode}
            direction={Direction.WEST}
            cardSize={40}
          />
        {/if}
      </div>

      <!-- East hand (middle-right) -->
      <div class="col-start-3 row-start-2 flex items-center justify-center">
        {#if $eastHand}
          <HandRenderer
            hand={$eastHand}
            displayMode={$displayMode}
            direction={Direction.EAST}
            cardSize={40}
          />
        {/if}
      </div>

      <!-- South hand (bottom-center) -->
      <div class="col-start-2 row-start-3 flex items-center justify-center">
        {#if $southHand}
          <HandRenderer
            hand={$southHand}
            displayMode={$displayMode}
            direction={Direction.SOUTH}
            cardSize={40}
          />
        {/if}
      </div>
    </div>
  </div>
{/if}