import { writable } from 'svelte/store';

// Example enum (adapt as needed for your app)
export enum DeckView {
  Symbols = 'Symbols',
  Images = 'Images',
  // ...other deck view types
}

export const deckView = writable<DeckView>(DeckView.Symbols);

export function setDeckView(view: DeckView) {
  deckView.set(view);
}