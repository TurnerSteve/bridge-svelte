<script lang="ts">
  import { getTrayInfo, type LookupEntry } from '$lib/bridge/utils';
  import { Vulnerability, Direction } from '$lib/types/cards';

  const { boardId } = $props<{ boardId: number }>();
  const board = $derived(() : LookupEntry => getTrayInfo(boardId));

  const vul = $derived(() => board().vulnerability );
  const dealer = $derived(() => board().dealer) ;

  const fontSize = 20;
  const centerX = 50;
  const centerY = 50;
  const size: number = 100;

  // Colors for perimeter based on vulnerability
  const nsColor = $derived(() => (vul() === Vulnerability.NS || vul() === Vulnerability.ALL) ? "red" : "green") ;


  const ewColor = $derived(() => (vul() === Vulnerability.EW || vul() === Vulnerability.ALL) ? "red" : "green");

  // Arrow color logic
  function arrowColor() {
    if (
      (dealer() === Direction.NORTH || dealer() === Direction.SOUTH) &&
      (vul() === Vulnerability.NS || vul() === Vulnerability.ALL)
    ) return "red";
    if (
      (dealer() === Direction.EAST || dealer() === Direction.WEST) &&
      (vul() === Vulnerability.EW || vul() === Vulnerability.ALL)
    ) return "red";
    return "green";
  }
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- Perimeter Rectangles -->
  <rect x="0" y="0" width="100" height="10" fill={nsColor()} />
  <rect x="0" y="90" width="100" height="10" fill={nsColor()} />
  <rect x="90" y="0" width="10" height="100" fill={ewColor()} />
  <rect x="0" y="0" width="10" height="100" fill={ewColor()} />

  <!-- North Dealer label -->
  {#if dealer() === Direction.NORTH}
    <text x="50" y="8" fill="white" font-size="8" font-weight="bold" text-anchor="middle">
      DEALER
    </text>
  {/if}
  <!-- South Dealer label -->
  {#if dealer() === Direction.SOUTH}
    <text x="50" y="98" fill="white" font-size="8" font-weight="bold" text-anchor="middle">
      DEALER
    </text>
  {/if}
  <!-- East Dealer label (rotated) -->
  {#if dealer() === Direction.EAST}
    <text
      x="95"
      y="50"
      fill="white"
      font-size="8"
      font-weight="bold"
      text-anchor="middle"
      dominant-baseline="middle"
      transform="rotate(90, 95, 50)"
    >
      DEALER
    </text>
  {/if}
  <!-- West Dealer label (rotated) -->
  {#if dealer() === Direction.WEST}
    <text
      x="5"
      y="50"
      fill="white"
      font-size="8"
      font-weight="bold"
      text-anchor="middle"
      dominant-baseline="middle"
      transform="rotate(-90, 5, 50)"
    >
      DEALER
    </text>
  {/if}

  <!-- Central Board Number -->
  {#if boardId > 0}
    <text
      x={centerX}
      y={centerY + fontSize / 3}
      fill="black"
      font-size={fontSize}
      font-weight="bold"
      text-anchor="middle"
    >
      {boardId}
    </text>
  {/if}

  <!-- Dealer Arrow -->
  {#if dealer() === Direction.NORTH}
    <polygon points="50,12 70,25 30,25" stroke={arrowColor()} fill={arrowColor()} stroke-width="2" />
  {:else if dealer() === Direction.EAST}
    <polygon points="88,50 75,30 75,70" stroke={arrowColor()} fill={arrowColor()} stroke-width="2" />
  {:else if dealer() === Direction.SOUTH}
    <polygon points="50,88 70,75 30,75" stroke={arrowColor()} fill={arrowColor()} stroke-width="2" />
  {:else if dealer() === Direction.WEST}
    <polygon points="12,50 25,30 25,70" stroke={arrowColor()} fill={arrowColor()} stroke-width="2" />
  {/if}
</svg>