import { writable } from 'svelte/store';
import { Deckview } from '$lib/types/cards';
// Example enum (adapt as needed for your app)

export const deckview = writable<Deckview>(Deckview.UNICODE);

export function setDeckview(view: Deckview) {
  deckview.set(view);
}