// svgCards.ts
import { Suit, Rank } from '$lib/types/cards';

import TwoSpades from '$lib/icons/game-icons/2_spades.svelte';
import ThreeSpades from '$lib/icons/game-icons/3_spades.svelte';
import FourSpades from '$lib/icons/game-icons/4_spades.svelte';
import FiveSpades from '$lib/icons/game-icons/5_spades.svelte';
import SixSpades from '$lib/icons/game-icons/6_spades.svelte';
import SevenSpades from '$lib/icons/game-icons/7_spades.svelte';
import EightSpades from '$lib/icons/game-icons/8_spades.svelte';
import NineSpades from '$lib/icons/game-icons/9_spades.svelte';
import TenSpades from '$lib/icons/game-icons/10_spades.svelte';
import JackSpades from '$lib/icons/game-icons/jack_spades.svelte';
import QueenSpades from '$lib/icons/game-icons/queen_spades.svelte';
import KingSpades from '$lib/icons/game-icons/king_spades.svelte';
import AceSpades from '$lib/icons/game-icons/ace_spades.svelte';
import TwoHearts from '$lib/icons/game-icons/2_hearts.svelte';
import ThreeHearts from '$lib/icons/game-icons/3_hearts.svelte';
import FourHearts from '$lib/icons/game-icons/4_hearts.svelte';
import FiveHearts from '$lib/icons/game-icons/5_hearts.svelte';
import SixHearts from '$lib/icons/game-icons/6_hearts.svelte';
import SevenHearts from '$lib/icons/game-icons/7_hearts.svelte';
import EightHearts from '$lib/icons/game-icons/8_hearts.svelte';
import NineHearts from '$lib/icons/game-icons/9_hearts.svelte';
import TenHearts from '$lib/icons/game-icons/10_hearts.svelte';
import JackHearts from '$lib/icons/game-icons/jack_hearts.svelte';
import QueenHearts from '$lib/icons/game-icons/queen_hearts.svelte';
import KingHearts from '$lib/icons/game-icons/king_hearts.svelte';
import AceHearts from '$lib/icons/game-icons/ace_hearts.svelte';
import TwoDiamonds from '$lib/icons/game-icons/2_diamonds.svelte';
import ThreeDiamonds from '$lib/icons/game-icons/3_diamonds.svelte';
import FourDiamonds from '$lib/icons/game-icons/4_diamonds.svelte';
import FiveDiamonds from '$lib/icons/game-icons/5_diamonds.svelte';
import SixDiamonds from '$lib/icons/game-icons/6_diamonds.svelte';
import SevenDiamonds from '$lib/icons/game-icons/7_diamonds.svelte';
import EightDiamonds from '$lib/icons/game-icons/8_diamonds.svelte';
import NineDiamonds from '$lib/icons/game-icons/9_diamonds.svelte';
import TenDiamonds from '$lib/icons/game-icons/10_diamonds.svelte';
import JackDiamonds from '$lib/icons/game-icons/jack_diamonds.svelte';
import QueenDiamonds from '$lib/icons/game-icons/queen_diamonds.svelte';
import KingDiamonds from '$lib/icons/game-icons/king_diamonds.svelte';
import AceDiamonds from '$lib/icons/game-icons/ace_diamonds.svelte';
import TwoClubs from '$lib/icons/game-icons/2_clubs.svelte';
import ThreeClubs from '$lib/icons/game-icons/3_clubs.svelte';
import FourClubs from '$lib/icons/game-icons/4_clubs.svelte';
import FiveClubs from '$lib/icons/game-icons/5_clubs.svelte';
import SixClubs from '$lib/icons/game-icons/6_clubs.svelte';
import SevenClubs from '$lib/icons/game-icons/7_clubs.svelte';
import EightClubs from '$lib/icons/game-icons/8_clubs.svelte';
import NineClubs from '$lib/icons/game-icons/9_clubs.svelte';
import TenClubs from '$lib/icons/game-icons/10_clubs.svelte';
import JackClubs from '$lib/icons/game-icons/jack_clubs.svelte';
import QueenClubs from '$lib/icons/game-icons/queen_clubs.svelte';
import KingClubs from '$lib/icons/game-icons/king_clubs.svelte';
import AceClubs from '$lib/icons/game-icons/ace_clubs.svelte';

export const svgCards: Record<Suit, Record<Rank, ComponentType>> = {
  [Suit.SPADES]: {
    [Rank.TWO]: TwoSpades,
    [Rank.THREE]: ThreeSpades,
    [Rank.FOUR]: FourSpades,
    [Rank.FIVE]: FiveSpades,
    [Rank.SIX]: SixSpades,
    [Rank.SEVEN]: SevenSpades,
    [Rank.EIGHT]: EightSpades,
    [Rank.NINE]: NineSpades,
    [Rank.TEN]: TenSpades,
    [Rank.JACK]: JackSpades,
    [Rank.QUEEN]: QueenSpades,
    [Rank.KING]: KingSpades,
    [Rank.ACE]: AceSpades,
  },

  [Suit.HEARTS]: {
    [Rank.TWO]: TwoHearts,
    [Rank.THREE]: ThreeHearts,
    [Rank.FOUR]: FourHearts,
    [Rank.FIVE]: FiveHearts,
    [Rank.SIX]: SixHearts,
    [Rank.SEVEN]: SevenHearts,
    [Rank.EIGHT]: EightHearts,
    [Rank.NINE]: NineHearts,
    [Rank.TEN]: TenHearts,
    [Rank.JACK]: JackHearts,
    [Rank.QUEEN]: QueenHearts,
    [Rank.KING]: KingHearts,
    [Rank.ACE]: AceHearts,
  },

  [Suit.DIAMONDS]: {
    [Rank.TWO]: TwoDiamonds,
    [Rank.THREE]: ThreeDiamonds,
    [Rank.FOUR]: FourDiamonds,
    [Rank.FIVE]: FiveDiamonds,
    [Rank.SIX]: SixDiamonds,
    [Rank.SEVEN]: SevenDiamonds,
    [Rank.EIGHT]: EightDiamonds,
    [Rank.NINE]: NineDiamonds,
    [Rank.TEN]: TenDiamonds,
    [Rank.JACK]: JackDiamonds,
    [Rank.QUEEN]: QueenDiamonds,
    [Rank.KING]: KingDiamonds,
    [Rank.ACE]: AceDiamonds,
  },

  [Suit.CLUBS]: {
    [Rank.TWO]: TwoClubs,
    [Rank.THREE]: ThreeClubs,
    [Rank.FOUR]: FourClubs,
    [Rank.FIVE]: FiveClubs,
    [Rank.SIX]: SixClubs,
    [Rank.SEVEN]: SevenClubs,
    [Rank.EIGHT]: EightClubs,
    [Rank.NINE]: NineClubs,
    [Rank.TEN]: TenClubs,
    [Rank.JACK]: JackClubs,
    [Rank.QUEEN]: QueenClubs,
    [Rank.KING]: KingClubs,
    [Rank.ACE]: AceClubs,
  },
};
