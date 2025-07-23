// src/lib/data/pngCards.ts
import { Suit, Rank } from '$lib/types/cards';

const rankToName: Record<Rank, string> = {
  [Rank.ACE]: 'ace',
  [Rank.TWO]: '2',
  [Rank.THREE]: '3',
  [Rank.FOUR]: '4',
  [Rank.FIVE]: '5',
  [Rank.SIX]: '6',
  [Rank.SEVEN]: '7',
  [Rank.EIGHT]: '8',
  [Rank.NINE]: '9',
  [Rank.TEN]: '10',
  [Rank.JACK]: 'jack',
  [Rank.QUEEN]: 'queen',
  [Rank.KING]: 'king',
};

const suitToName: Record<Suit, string> = {
  [Suit.SPADES]: 'spades',
  [Suit.HEARTS]: 'hearts',
  [Suit.DIAMONDS]: 'diamonds',
  [Suit.CLUBS]: 'clubs',
};

// Returns the full static URL to a PNG card image
export default function pngCards(rank: Rank, suit: Suit): string {
  const rankName = rankToName[rank];
  const suitName = suitToName[suit];
  return `/cards/png/${rankName}_of_${suitName}.png`;
}