<!-- <script lang="ts">
  import { Direction } from '$lib/types/cards';
  import BridgeDealGrid from '$lib/components/elements/BridgeDealGrid.svelte';
  import CompactHandRenderer from '$lib/components/renderers/CompactHandRenderer.svelte';
  import { getTrayInfo } from '$lib/bridge/utils';
  import { storedDeals } from '$lib/stores/dealStore';
  import { deckView } from '$lib/stores/deckView';

  const boardId = $storedDeals[0].boardNo;
  const northHand = $storedDeals[0].deal[Direction.NORTH];
  const southHand = $storedDeals[0].deal[Direction.SOUTH];
  const eastHand = $storedDeals[0].deal[Direction.EAST];
  const westHand = $storedDeals[0].deal[Direction.WEST];

  const displayMode = $deckView;
  const algo = $storedDeals[0].algo;
  const info = getTrayInfo(boardId);

  // -- Fragments/components as arrow functions:
  const north = () => <CompactHandRenderer hand={northHand} displayMode={displayMode} direction={Direction.NORTH} />;
  const south = () => <CompactHandRenderer hand={southHand} displayMode={displayMode} direction={Direction.SOUTH} />;
  const east  = () => <CompactHandRenderer hand={eastHand}  displayMode={displayMode} direction={Direction.EAST}  />;
  const west  = () => <CompactHandRenderer hand={westHand}  displayMode={displayMode} direction={Direction.WEST}  />;

  const center = () => (
    <div class="text-center">
      <div class="font-bold">Vul: {info.vulnerability}</div>
      <div class="text-sm">Dealer: {info.dealer}</div>
    </div>
  );

  const infoTopLeft = () => (
    <div class="text-xs text-gray-500">
      <div class="text-xs">Algorithm</div>
      <div class="text-lg font-bold">{algo}</div>
    </div>
  );

  const infoTopRight = () => <span>Board {boardNo}</span>;
  const infoBottomLeft = () => <span>Dealer {info.dealer}</span>;
  const infoBottomRight = () => <span>{info.vulnerability}</span>;

  const redealButton = () => (
    <button class="btn btn-sm bg-blue-500 text-white rounded px-2 py-1 shadow">
      Redeal
    </button>
  );
</script>

<BridgeDealGrid
  {north}
  {south}
  {east}
  {west}
  {center}
  {infoTopLeft}
  {infoTopRight}
  {infoBottomLeft}
  {infoBottomRight}
  {redealButton}
/> -->