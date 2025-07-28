import { writable } from 'svelte/store';

export const partialDealSlots = writable<number[]>([13, 13, 13, 13]); // or however many slots you need

export function setPartialDealSlots(slots: number[]) {
  partialDealSlots.set(slots);
}
