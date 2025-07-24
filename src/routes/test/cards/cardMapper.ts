import { Rank, Suit } from '$lib/types/cards';

export function toFullRank(token: string): Rank {
	const t = token.toUpperCase();

	if (t === '10' || t === 'T') return Rank.TEN;

	if (Object.values(Rank).includes(t as Rank)) {
		return t as Rank;
	}

	throw new Error(`Invalid rank token: ${token}`);
}

export function toFullRankTokens(chars: string[]): Rank[] {
	const result: Rank[] = [];

	for (let i = 0; i < chars.length; i++) {
		const char = chars[i].toUpperCase();

		if (char === '1') {
			if (chars[i + 1] === '0') {
				result.push(Rank.TEN);
				i++; // skip '0'
			} else {
				throw new Error(`Invalid rank token: '1' must be followed by '0' to represent '10'`);
			}
		} else if (char === '0') {
			throw new Error(`Invalid rank token: '0' must be preceded by '1'`);
		} else if ((Object.values(Rank) as string[]).includes(char)) {
			result.push(char as Rank);
		} else {
			throw new Error(`Invalid rank token: '${char}' is not a recognized rank`);
		}
	}

	return result;
}

export function toFullSuit(letter: string): Suit {
	switch (letter.toUpperCase()) {
		case 'S':
			return Suit.SPADES;
		case 'H':
			return Suit.HEARTS;
		case 'D':
			return Suit.DIAMONDS;
		case 'C':
			return Suit.CLUBS;
		default:
			throw new Error(`Invalid suit letter: ${letter}`);
	}
}