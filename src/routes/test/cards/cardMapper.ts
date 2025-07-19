export type FullRank =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'jack'
  | 'queen'
  | 'king'
  | 'ace';

export type FullSuit = 'spades' | 'hearts' | 'diamonds' | 'clubs';

const rankMap: Record<string, FullRank> = {
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

const suitMap: Record<string, FullSuit> = {
  S: 'spades',
  H: 'hearts',
  D: 'diamonds',
  C: 'clubs'
};

export function toFullRank(rank: string): FullRank {
  return rankMap[rank.toUpperCase()];
}

export function toFullRankTokens(tokens: string[]): FullRank[] {
  const result: FullRank[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const current = tokens[i].toUpperCase();
    const next = tokens[i + 1]?.toUpperCase();

    if (current === '1' && next === '0') {
      result.push('10');
      i++; // skip next
    } else {
      const full = rankMap[current];
      if (full) result.push(full);
    }
  }
  return result;
}

export function toFullSuit(suit: string): FullSuit {
  return suitMap[suit.toUpperCase()] ?? 'spades';
}