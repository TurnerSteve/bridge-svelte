<script lang="ts">
  import { Suit, Rank, DeckView } from '$lib/types/cards';
  import { bridgeIcons } from '$lib/reactIconCards'; // or adjust path
  import { getImageFileName } from '$lib/getImageFileName';
  import { unicodeCards } from '$lib/unicodeCards';

  export let suit: Suit;
  export let rank: Rank;
  export let displayMode: DeckView;
  export let size: number = 25;
</script>

{#if displayMode === DeckView.TEXT}
  <span class="font-mono">{rank}</span>

{:else if displayMode === DeckView.IMAGE}
  <span
    class="relative overflow-hidden"
    style="
      display: inline-block;
      width: {size}px;
      aspect-ratio: 2/3;
    "
  >
    <img
      src={getImageFileName(suit, rank)}
      alt="{rank} of {suit}"
      style="
        object-fit: contain;
        width: 100%;
        height: 100%;
      "
      width={size}
      height={Math.round(size * 1.5)}
      loading="lazy"
      draggable="false"
    />
  </span>

{:else if displayMode === DeckView.ICON}
  {#if bridgeIcons[suit] && bridgeIcons[suit][rank]}
    <svelte:component
      this={bridgeIcons[suit][rank]}
      size={size}
      color={(suit === Suit.HEARTS || suit === Suit.DIAMONDS) ? "#c00" : "#222"}
      style="vertical-align: middle;"
    />
  {:else}
    <span>?</span>
  {/if}

{:else if displayMode === DeckView.SYMBOL}
  <span
    style="
      display: inline-block;
      font-size: {size}px;
      background: #eee;
      color: {(suit === Suit.HEARTS || suit === Suit.DIAMONDS) ? '#c00' : '#222'};
      padding: 0;
      border-radius: 4px;
      font-family: Segoe UI Symbol, Noto Color Emoji, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI', 'Arial Unicode MS', 'Arial', sans-serif;
      line-height: 1;
      vertical-align: middle;
    "
  >
    {unicodeCards[suit][rank]}
  </span>

{:else}
  <span>?</span>
{/if}
