<script lang="ts">
	import CardImage from './CardImage.svelte';
	import type { FullRank, FullSuit } from './cardMapper';

	const { rank, suit } = $props<{ rank: FullRank; suit: FullSuit }>();
</script>

<CardImage {rank} {suit} />

<script context="module" lang="ts">
  import type { Suit, Rank, DeckView } from '$lib/types/cards';

  export interface Props {
    suit: Suit;
    rank: Rank;
    displayMode: DeckView;
    size?: number;
  }
</script>

<script lang="ts">
  import { unicodeCards } from '$lib/types/unicodeCards';
  import { getImageFileName } from '$lib/utils/getImageFileName';
  import { bridgeIcons } from '$lib/icons/bridgeIcons';

  const { suit, rank, displayMode, size = 50 } = $props<Props>();

  const isRed = $derived(() => suit === 'HEARTS' || suit === 'DIAMONDS');
  const UnicodeChar = $derived(() => unicodeCards[suit]?.[rank]);
  const IconComponent = $derived(() => bridgeIcons[suit]?.[rank]);
  const imageSrc = $derived(() => getImageFileName(suit, rank));
</script>

{#if displayMode === 'TEXT'}
  <span class="font-mono">{rank}</span>

{:else if displayMode === 'IMAGE'}
  <span
    class="relative overflow-hidden"
    style="display:inline-block; width:{size}px; aspect-ratio:2/3"
  >
    <img
      src={imageSrc()}
      alt="{rank} of {suit}"
      loading="lazy"
      draggable="false"
      width={size}
      height={Math.round(size * 1.5)}
      style="object-fit:contain; width:100%; height:100%"
    />
  </span>

{:else if displayMode === 'ICON'}
  {#if IconComponent()}
    {@render IconComponent()({ size, color: isRed() ? '#c00' : '#222' })}
  {:else}
    <span>?</span>
  {/if}

{:else if displayMode === 'SYMBOL'}
  <span
    style="
      display:inline-block;
      font-size:{size}px;
      background:#eee;
      color:{isRed() ? '#c00' : '#222'};
      border-radius:4px;
      font-family:Segoe UI Symbol, Noto Color Emoji, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI', Arial Unicode MS, Arial, sans-serif;
      line-height:1;
      vertical-align:middle;
    "
  >
    {UnicodeChar()}
  </span>

{:else}
  <span>?</span>
{/if}