// cardMapper.ts

import type { ComponentProps } from "./CardImage.svelte";

export function toFullRank(rank: string): ComponentProps['rank'] {
  const rankMap: Record<string, ComponentProps['rank']> = {
    A: 'ace',
    K: 'king',
    Q: 'queen',
    J: 'jack',
    T: '10',
    '10': '10',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9'
  };
  return rankMap[rank.toUpperCase()];
}

export function toFullSuit(suit: string): ComponentProps['suit'] {
  const suitMap: Record<string, ComponentProps['suit']> = {
    S: 'spades',
    H: 'hearts',
    D: 'diamonds',
    C: 'clubs'
  };
  return suitMap[suit.toUpperCase()];
}