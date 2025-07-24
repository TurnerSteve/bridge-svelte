<!-- src/lib/components/renderers/CardRenderer.svelte -->

<script module lang="ts">
	export interface iProps {
		suit: Suit;
		rank: Rank;
		view?: DeckView;
		size?: number;
		class?: string;
	}
</script>

<script lang="ts">
	import { Suit, Rank, DeckView } from '$lib/types/cards';
	import { unicodeCards, pngCards, deck1Cards, deck2Cards,  iconCards } from '$lib/data';

	const { suit, rank, view = DeckView.UNICODE, size = 40, class: className = '' }: iProps = $props();
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
{:else if view === DeckView.SVG1}
	{#if deck1Cards[suit] && deck1Cards[suit][rank]}
		{#key `${suit}-${rank}-svg`}
			{#await Promise.resolve(deck1Cards[suit][rank]) then Svg}
				<Svg {size} class={`${className} outline-[0.5px] outline-black`} />
			{/await}
		{/key}
	{/if}

	{:else if view === DeckView.SVG2}
	{#if deck2Cards[suit] && deck2Cards[suit][rank]}
		{#key `${suit}-${rank}-svg`}
			{#await Promise.resolve(deck2Cards[suit][rank]) then Svg}
				<Svg {size} class={`${className} outline-[0.5px] outline-black`} />
			{/await}
		{/key}
	{/if}
{:else}
	<span class={`text-sm ${className}`}>{rank} {suit}</span>
{/if}
