// svgCards.ts
import { Suit, Rank } from '$lib/types/cards';

import TwoSpades from '$lib/icons/full-cards/2_of_spades.svelte';
import ThreeSpades from '$lib/icons/full-cards/3_of_spades.svelte';
import FourSpades from '$lib/icons/full-cards/4_of_spades.svelte';
import FiveSpades from '$lib/icons/full-cards/5_of_spades.svelte';
import SixSpades from '$lib/icons/full-cards/6_of_spades.svelte';
import SevenSpades from '$lib/icons/full-cards/7_of_spades.svelte';
import EightSpades from '$lib/icons/full-cards/8_of_spades.svelte';
import NineSpades from '$lib/icons/full-cards/9_of_spades.svelte';
import TenSpades from '$lib/icons/full-cards/10_of_spades.svelte';
import JackSpades from '$lib/icons/full-cards/jack_of_spades.svelte';
import QueenSpades from '$lib/icons/full-cards/queen_of_spades.svelte';
import KingSpades from '$lib/icons/full-cards/king_of_spades.svelte';
import AceSpades from '$lib/icons/full-cards/ace_of_spades.svelte';
import TwoHearts from '$lib/icons/full-cards/2_of_hearts.svelte';
import ThreeHearts from '$lib/icons/full-cards/3_of_hearts.svelte';
import FourHearts from '$lib/icons/full-cards/4_of_hearts.svelte';
import FiveHearts from '$lib/icons/full-cards/5_of_hearts.svelte';
import SixHearts from '$lib/icons/full-cards/6_of_hearts.svelte';
import SevenHearts from '$lib/icons/full-cards/7_of_hearts.svelte';
import EightHearts from '$lib/icons/full-cards/8_of_hearts.svelte';
import NineHearts from '$lib/icons/full-cards/9_of_hearts.svelte';
import TenHearts from '$lib/icons/full-cards/10_of_hearts.svelte';
import JackHearts from '$lib/icons/full-cards/jack_of_hearts.svelte';
import QueenHearts from '$lib/icons/full-cards/queen_of_hearts.svelte';
import KingHearts from '$lib/icons/full-cards/king_of_hearts.svelte';
import AceHearts from '$lib/icons/full-cards/ace_of_hearts.svelte';
import TwoDiamonds from '$lib/icons/full-cards/2_of_diamonds.svelte';
import ThreeDiamonds from '$lib/icons/full-cards/3_of_diamonds.svelte';
import FourDiamonds from '$lib/icons/full-cards/4_of_diamonds.svelte';
import FiveDiamonds from '$lib/icons/full-cards/5_of_diamonds.svelte';
import SixDiamonds from '$lib/icons/full-cards/6_of_diamonds.svelte';
import SevenDiamonds from '$lib/icons/full-cards/7_of_diamonds.svelte';
import EightDiamonds from '$lib/icons/full-cards/8_of_diamonds.svelte';
import NineDiamonds from '$lib/icons/full-cards/9_of_diamonds.svelte';
import TenDiamonds from '$lib/icons/full-cards/10_of_diamonds.svelte';
import JackDiamonds from '$lib/icons/full-cards/jack_of_diamonds.svelte';
import QueenDiamonds from '$lib/icons/full-cards/queen_of_diamonds.svelte';
import KingDiamonds from '$lib/icons/full-cards/king_of_diamonds.svelte';
import AceDiamonds from '$lib/icons/full-cards/ace_of_diamonds.svelte';
import TwoClubs from '$lib/icons/full-cards/2_of_clubs.svelte';
import ThreeClubs from '$lib/icons/full-cards/3_of_clubs.svelte';
import FourClubs from '$lib/icons/full-cards/4_of_clubs.svelte';
import FiveClubs from '$lib/icons/full-cards/5_of_clubs.svelte';
import SixClubs from '$lib/icons/full-cards/6_of_clubs.svelte';
import SevenClubs from '$lib/icons/full-cards/7_of_clubs.svelte';
import EightClubs from '$lib/icons/full-cards/8_of_clubs.svelte';
import NineClubs from '$lib/icons/full-cards/9_of_clubs.svelte';
import TenClubs from '$lib/icons/full-cards/10_of_clubs.svelte';
import JackClubs from '$lib/icons/full-cards/jack_of_clubs.svelte';
import QueenClubs from '$lib/icons/full-cards/queen_of_clubs.svelte';
import KingClubs from '$lib/icons/full-cards/king_of_clubs.svelte';
import AceClubs from '$lib/icons/full-cards/ace_of_clubs.svelte';


export const svgCards: Record<Suit, Record<Rank, unknown>> = {
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
