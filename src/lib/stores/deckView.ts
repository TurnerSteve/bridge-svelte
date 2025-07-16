import { writable } from 'svelte/store';
import { DeckView } from '$lib/types/cards';
// Example enum (adapt as needed for your app)


export const deckView = writable<DeckView>(DeckView.SYMBOL);

export function setDeckView(view: DeckView) {
  deckView.set(view);
}