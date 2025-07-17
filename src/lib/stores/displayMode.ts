// src/lib/stores/displayMode.ts
import { writable } from 'svelte/store';
import { DeckView } from '$lib/types/cards';

export const displayMode = writable<DeckView>(DeckView.TEXT);

// Optional setter for convenience
export function setDisplayMode(mode: DeckView) {
  displayMode.set(mode);
}