<script lang="ts">
	import BridgeDealGrid from './BridgeDealGrid.svelte';
	import { Direction } from '$lib/types/cards';
	import { getTrayInfo } from '$lib/bridge/utils';
	import { storedDeals } from '$lib/stores/dealStore';
	import { deckview } from '$lib/stores';

  import { derived } from 'svelte/store';

  const deal = derived(storedDeals, ($storedDeals) => $storedDeals[0]);
  const info = derived(deal, ($deal) => ($deal ? getTrayInfo($deal.boardNo) : null));
  const displayMode = deckview;

</script>
{#if $deal}
  <BridgeDealGrid
    boardNo={$deal.boardNo}
    algo={$deal.algo}
    vulnerability={$info!.vulnerability}
    dealer={$info!.dealer}
    displayMode={$displayMode}
    northHand={$deal.deal[Direction.NORTH]}
    southHand={$deal.deal[Direction.SOUTH]}
    eastHand={$deal.deal[Direction.EAST]}
    westHand={$deal.deal[Direction.WEST]}
  />
{:else}
  <div>No deal found.</div>
{/if}

