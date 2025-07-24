// svgCards.ts
import { Suit, Rank } from '$lib/types/cards';

import TwoSpades from '$lib/icons/DECK2-cards/SPADE_2.svelte';
import ThreeSpades from '$lib/icons/DECK2-cards/SPADE_3.svelte';
import FourSpades from '$lib/icons/DECK2-cards/SPADE_4.svelte';
import FiveSpades from '$lib/icons/DECK2-cards/SPADE_5.svelte';
import SixSpades from '$lib/icons/DECK2-cards/SPADE_6.svelte';
import SevenSpades from '$lib/icons/DECK2-cards/SPADE_7.svelte';
import EightSpades from '$lib/icons/DECK2-cards/SPADE_8.svelte';
import NineSpades from '$lib/icons/DECK2-cards/SPADE_9.svelte';
import TenSpades from '$lib/icons/DECK2-cards/SPADE_10.svelte';
import JackSpades from '$lib/icons/DECK2-cards/SPADE_11_JACK.svelte';
import QueenSpades from '$lib/icons/DECK2-cards/SPADE_12_QUEEN.svelte';
import KingSpades from '$lib/icons/DECK2-cards/SPADE_13_KING.svelte';
import AceSpades from '$lib/icons/DECK2-cards/SPADE_1.svelte';
import TwoHearts from '$lib/icons/DECK2-cards/HEART_2.svelte';
import ThreeHearts from '$lib/icons/DECK2-cards/HEART_3.svelte';
import FourHearts from '$lib/icons/DECK2-cards/HEART_4.svelte';
import FiveHearts from '$lib/icons/DECK2-cards/HEART_5.svelte';
import SixHearts from '$lib/icons/DECK2-cards/HEART_6.svelte';
import SevenHearts from '$lib/icons/DECK2-cards/HEART_7.svelte';
import EightHearts from '$lib/icons/DECK2-cards/HEART_8.svelte';
import NineHearts from '$lib/icons/DECK2-cards/HEART_9.svelte';
import TenHearts from '$lib/icons/DECK2-cards/HEART_10.svelte';
import JackHearts from '$lib/icons/DECK2-cards/HEART_11_JACK.svelte';
import QueenHearts from '$lib/icons/DECK2-cards/HEART_12_QUEEN.svelte';
import KingHearts from '$lib/icons/DECK2-cards/HEART_13_KING.svelte';
import AceHearts from '$lib/icons/DECK2-cards/HEART_1.svelte';
import TwoDiamonds from '$lib/icons/DECK2-cards/DIAMOND_2.svelte';
import ThreeDiamonds from '$lib/icons/DECK2-cards/DIAMOND_3.svelte';
import FourDiamonds from '$lib/icons/DECK2-cards/DIAMOND_4.svelte';
import FiveDiamonds from '$lib/icons/DECK2-cards/DIAMOND_5.svelte';
import SixDiamonds from '$lib/icons/DECK2-cards/DIAMOND_6.svelte';
import SevenDiamonds from '$lib/icons/DECK2-cards/DIAMOND_7.svelte';
import EightDiamonds from '$lib/icons/DECK2-cards/DIAMOND_8.svelte';
import NineDiamonds from '$lib/icons/DECK2-cards/DIAMOND_9.svelte';
import TenDiamonds from '$lib/icons/DECK2-cards/DIAMOND_10.svelte'; 
import JackDiamonds from '$lib/icons/DECK2-cards/DIAMOND_11_JACK.svelte';
import QueenDiamonds from '$lib/icons/DECK2-cards/DIAMOND_12_QUEEN.svelte';
import KingDiamonds from '$lib/icons/DECK2-cards/DIAMOND_13_KING.svelte'; 
import AceDiamonds from '$lib/icons/DECK2-cards/DIAMOND_1.svelte';  
import TwoClubs from '$lib/icons/DECK2-cards/CLUB_2.svelte';
import ThreeClubs from '$lib/icons/DECK2-cards/CLUB_3.svelte';
import FourClubs from '$lib/icons/DECK2-cards/CLUB_4.svelte';
import FiveClubs from '$lib/icons/DECK2-cards/CLUB_5.svelte';
import SixClubs from '$lib/icons/DECK2-cards/CLUB_6.svelte';
import SevenClubs from '$lib/icons/DECK2-cards/CLUB_7.svelte';
import EightClubs from '$lib/icons/DECK2-cards/CLUB_8.svelte';
import NineClubs from '$lib/icons/DECK2-cards/CLUB_9.svelte';
import TenClubs from '$lib/icons/DECK2-cards/CLUB_10.svelte';
import JackClubs from '$lib/icons/DECK2-cards/CLUB_11_JACK.svelte';
import QueenClubs from '$lib/icons/DECK2-cards/CLUB_12_QUEEN.svelte';
import KingClubs from '$lib/icons/DECK2-cards/CLUB_13_KING.svelte';
import AceClubs from '$lib/icons/DECK2-cards/CLUB_1.svelte';



export const svgCards = {
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
} satisfies Record<Suit, Record<Rank, typeof TwoSpades>>;
