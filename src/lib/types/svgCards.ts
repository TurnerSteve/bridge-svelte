import { Suit, Rank } from './cards';

export const getSvgPath = (suit: Suit, rank: Rank): string =>
  `/cards/svg/${suit}_${rank}.svg`;