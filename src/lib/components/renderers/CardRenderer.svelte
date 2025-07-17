<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  import { Suit, Rank, DeckView } from '$lib/types/cards';
  import { bridgeIcons } from '$lib/icons/bridgeIcons';
  import { getImageFileName } from '$lib/utils/getImageFileName';
  import { unicodeCards } from '$lib/types/unicodeCards';

  // grab a typed props object
  const props = $props<{
    suit: Suit;
    rank: Rank;
    displayMode: DeckView;
    size?: number;
  }>();
  const { suit, rank, displayMode, size = 50 } = props;

  const isRed = suit === Suit.HEARTS || suit === Suit.DIAMONDS;

  // reactive lookup of the icon class (or null)
  const IconComponent = $derived<typeof SvelteComponent | null>(
    () => bridgeIcons[suit]?.[rank] ?? null
  );
</script>

{#if displayMode === DeckView.TEXT}
  <span class="font-mono">{rank}</span>

{:else if displayMode === DeckView.IMAGE}
  <span
    class="relative overflow-hidden"
    style="display:inline-block; width:{size}px; aspect-ratio:2/3"
  >
    <img
      src={getImageFileName(suit, rank)}
      alt="{rank} of {suit}"
      loading="lazy"
      draggable="false"
      width={size}
      height={Math.round(size * 1.5)}
      style="object-fit:contain; width:100%; height:100%"
    />
  </span>

{:else if displayMode === DeckView.ICON}
  {#if IconComponent}
    <IconComponent
      size={size}
      color={isRed ? '#c00' : '#222'}
      style="display:inline-block; vertical-align:middle;"
    />
  {:else}
    <span>?</span>
  {/if}  <!-- closes the IconComponent check -->

{:else if displayMode === DeckView.SYMBOL}
  <span
    style="
      display:inline-block;
      font-size:{size}px;
      background:#eee;
      color:{isRed ? '#c00' : '#222'};
      border-radius:4px;
      font-family:Segoe UI Symbol, Noto Color Emoji, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI', Arial Unicode MS, Arial, sans-serif;
      line-height:1;
      vertical-align:middle;
    "
  >
    {unicodeCards[suit][rank]}
  </span>

{:else}
  <span>?</span>
{/if}  <!-- closes the displayMode switch -->