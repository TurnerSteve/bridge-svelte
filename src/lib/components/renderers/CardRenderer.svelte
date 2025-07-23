<!-- src/lib/components/renderers/CardRenderer.svelte -->

<script module lang="ts">
	export interface Props {
		suit: Suit;
		rank: Rank;
		view?: DeckView;
		size?: number;
		class?: string;
	}
</script>

<script lang="ts">
	import { Suit, Rank, DeckView } from '$lib/types/cards';
	import { unicodeCards, pngCards, svgCards, iconCards } from '$lib/data';

	const { suit, rank, view = DeckView.UNICODE, size = 40, class: className = '' }: Props = $props();
</script>

{#if view === DeckView.UNICODE}
	<span class={`text-xl ${className}`}>{unicodeCards[suit][rank]}</span>
{:else if view === DeckView.PNG}
	<img
		src={pngCards(rank, suit)}
		alt={`${rank} of ${suit}`}
		width={size}
		height={size}
		class={className}
	/>
{:else if view === DeckView.ICON}
  {#if iconCards[suit] && iconCards[suit][rank]}
    {#key `${suit}-${rank}-icon`}
      {#await Promise.resolve(iconCards[suit][rank]) then Icon}
        <Icon {size} class={className} />
      {/await}
    {/key}
  {/if}

{:else if view === DeckView.SVG}
  {#if svgCards[suit] && svgCards[suit][rank]}
    {#key `${suit}-${rank}-svg`}
      {#await Promise.resolve(svgCards[suit][rank]) then Svg}
        <Svg {size} class={className} />
      {/await}
    {/key}
  {/if}

{:else}
	<span class={`text-sm ${className}`}>{rank} {suit}</span>
{/if}
