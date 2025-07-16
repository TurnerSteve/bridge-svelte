<script lang="ts">
  import { Direction, DeckView } from '$lib/types/cards';
  import type { DealStruct } from '$lib/types/structs';
  import HandRenderer from './HandRenderer.svelte';

  export let deal: DealStruct;
  export let displayMode: DeckView;
  export let cardSize: number = 40;
</script>

<div
  style="
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr auto 1fr;
    gap: 16px;
    align-items: center;
    justify-items: center;
    min-height: 400px;
    min-width: 500px;
  "
>
  <!-- North (top-center) -->
  <div style="grid-row: 1; grid-column: 2;">
    <HandRenderer
      hand={deal[Direction.NORTH]}
      {displayMode}
      direction={Direction.NORTH}
      {cardSize}
    />
  </div>
  <!-- West (middle-left) -->
  <div style="grid-row: 2; grid-column: 1;">
    <HandRenderer
      hand={deal[Direction.WEST]}
      {displayMode}
      direction={Direction.WEST}
      {cardSize}
    />
  </div>
  <!-- East (middle-right) -->
  <div style="grid-row: 2; grid-column: 3;">
    <HandRenderer
      hand={deal[Direction.EAST]}
      {displayMode}
      direction={Direction.EAST}
      {cardSize}
    />
  </div>
  <!-- South (bottom-center) -->
  <div style="grid-row: 3; grid-column: 2;">
    <HandRenderer
      hand={deal[Direction.SOUTH]}
      {displayMode}
      direction={Direction.SOUTH}
      {cardSize}
    />
  </div>
</div>