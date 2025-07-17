<script lang="ts">
  import { Direction } from '$lib/types/cards';
  import BridgeDealGrid from '$lib/components/elements/BridgeDealGrid.svelte';
  import CompactHandRenderer from '$lib/components/renderers/CompactHandRenderer.svelte';
  import { storedDeals } from '$lib/stores/dealStore';      // <--- your Svelte store for deals
  import { deckView } from '$lib/stores/deckView';       // <--- your Svelte store for deck view
  import { getTrayInfo } from '$lib/bridge/utils';

  $: boardNo = $storedDeals[0].boardNo;
  $: northHand = $storedDeals[0].deal[Direction.NORTH];
  $: southHand = $storedDeals[0].deal[Direction.SOUTH];
  $: eastHand = $storedDeals[0].deal[Direction.EAST];
  $: westHand = $storedDeals[0].deal[Direction.WEST];
  $: algo = $storedDeals[0].algo;
  $: info = getTrayInfo(boardNo);
  $: displayMode = $deckView;
</script>

<BridgeDealGrid>
  <CompactHandRenderer
    slot="north"
    hand={northHand}
    {displayMode}
    direction={Direction.NORTH}
  />
  <CompactHandRenderer
    slot="east"
    hand={eastHand}
    {displayMode}
    direction={Direction.EAST}
  />
  <CompactHandRenderer
    slot="south"
    hand={southHand}
    {displayMode}
    direction={Direction.SOUTH}
  />
  <CompactHandRenderer
    slot="west"
    hand={westHand}
    {displayMode}
    direction={Direction.WEST}
  />
  <div slot="center" class="text-center">
    <div class="font-bold">Vul: NS</div>
    <div class="text-sm">Dealer: E</div>
  </div>
  <!-- <button slot="redealButton" class="btn btn-sm bg-blue-500 text-white rounded px-2 py-1 shadow">
    Redeal
  </button> -->
  <div slot="infoTopLeft" class="text-xs text-gray-500">
    <div class="text-xs">Algorithm</div>
    <div class="text-lg font-bold">{algo}</div>
  </div>
  <div slot="infoTopRight" class="text-xs text-gray-500">
    Board {boardNo}
  </div>
  <div slot="infoBottomLeft" class="text-xs text-gray-500">
    Dealer {info.dealer}
  </div>
  <div slot="infoBottomRight" class="text-xs text-gray-500">
    {info.vulnerability}
  </div>
</BridgeDealGrid>