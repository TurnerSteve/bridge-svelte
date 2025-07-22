import { Suit, Rank } from './cards';
import type { SvelteComponent } from 'svelte';
import { GiAbstract113, GiAbstract114 } from 'svelte-icons/gi';


// from the game icons library

export const bridgeIcons: Record<Suit, Record<Rank, typeof SvelteComponent>> = {
  [Suit.SPADES]: {
    [Rank.ACE]: GiAbstract113,
    [Rank.KING]: GiAbstract114,
    // etc...
  },
  // Repeat for other suits
};


Game icons
<div class="flex space-x-0 text-3xl">
	<Icon icon="game-icons:card-2-spades" />
	<Icon icon="game-icons:card-3-spades" />
	<Icon icon="game-icons:card-4-spades" />
	<Icon icon="game-icons:card-5-spades" />
	<Icon icon="game-icons:card-6-spades" />
	<Icon icon="game-icons:card-7-spades" />
	<Icon icon="game-icons:card-8-spades" />
	<Icon icon="game-icons:card-9-spades" />
	<Icon icon="game-icons:card-10-spades" />
	<Icon icon="game-icons:card-jack-spades" />
	<Icon icon="game-icons:card-queen-spades" />
	<Icon icon="game-icons:card-king-spades" />
	<Icon icon="game-icons:card-ace-spades" />
</div>
<div class="flex space-x-0 text-4xl" style="color: red ">
	<Icon icon="game-icons:card-2-hearts" />
	<Icon icon="game-icons:card-3-hearts" />
	<Icon icon="game-icons:card-4-hearts" />
	<Icon icon="game-icons:card-5-hearts" />
	<Icon icon="game-icons:card-6-hearts" />
	<Icon icon="game-icons:card-7-hearts" />
	<Icon icon="game-icons:card-8-hearts" />
	<Icon icon="game-icons:card-9-hearts" />
	<Icon icon="game-icons:card-10-hearts" />
	<Icon icon="game-icons:card-jack-hearts" />
	<Icon icon="game-icons:card-queen-hearts" />
	<Icon icon="game-icons:card-king-hearts" />
	<Icon icon="game-icons:card-ace-hearts" />
</div>
<div class="flex space-x-0 text-5xl" style="color: red ">
    <Icon icon="game-icons:card-ace-diamonds" />
	<Icon icon="game-icons:card-2-diamonds" />
	<Icon icon="game-icons:card-3-diamonds" />
	<Icon icon="game-icons:card-4-diamonds" />
	<Icon icon="game-icons:card-5-diamonds" />
	<Icon icon="game-icons:card-6-diamonds" />
	<Icon icon="game-icons:card-7-diamonds" />
	<Icon icon="game-icons:card-8-diamonds" />
	<Icon icon="game-icons:card-9-diamonds" />
	<Icon icon="game-icons:card-10-diamonds" />
	<Icon icon="game-icons:card-jack-diamonds" />
	<Icon icon="game-icons:card-queen-diamonds" />
	<Icon icon="game-icons:card-king-diamonds" />

</div>
<div class="flex space-x-0 text-6xl">
    <Icon icon="game-icons:card-ace-clubs" />
	<Icon icon="game-icons:card-2-clubs" />
	<Icon icon="game-icons:card-3-clubs" />
	<Icon icon="game-icons:card-4-clubs" />
	<Icon icon="game-icons:card-5-clubs" />
	<Icon icon="game-icons:card-6-clubs" />
	<Icon icon="game-icons:card-7-clubs" />
	<Icon icon="game-icons:card-8-clubs" />
	<Icon icon="game-icons:card-9-clubs" />
	<Icon icon="game-icons:card-10-clubs" />
	<Icon icon="game-icons:card-jack-clubs" />
	<Icon icon="game-icons:card-queen-clubs" />
	<Icon icon="game-icons:card-king-clubs" />
	<Icon icon="game-icons:card-ace-clubs" />
</div>