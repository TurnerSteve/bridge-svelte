<script module lang='ts'>
  // This is a module script, so it can export types and constants
	export type ComponentProps = {
		hand: HandStruct;
		displayMode: DeckView;
		direction: Direction;
		cardSize?: number;
	};
</script>

<script lang="ts">
	import { Direction, DeckView, Suit } from '$lib/types/cards';
	import { suitOrder, suitSymbols } from '$lib/types/constants';
	import type { HandStruct } from '$lib/types/structs';
	import CardRenderer from './CardRenderer.svelte';

	const {hand, displayMode, direction, cardSize = 40} = $props();
	const suits = suitOrder as readonly Suit[];
</script>

<div>
	<div style="font-weight: bold; margin-bottom: 8px;">
		{direction}
	</div>
	<div style="display: flex; flex-direction: column; gap: 4px;">
		{#each suits as suit}
			<div style="display: flex; align-items: center; gap: 4px;">
				{#if displayMode === DeckView.TEXT}
					<span
						style="
              width: 16px;
              text-align: center;
              color: {suit === Suit.HEARTS || suit === Suit.DIAMONDS ? 'red' : 'black'};
              font-weight: bold;
            "
					>
						{suitSymbols[suit]}
					</span>
				{/if}
				<div style="display: flex; gap: 0;">
					{#each hand[suit] as rank}
						<CardRenderer {suit} {rank} view={displayMode} size={cardSize} />
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
