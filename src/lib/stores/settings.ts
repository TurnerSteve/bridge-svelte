import { writable } from 'svelte/store';

export const MULTI_DEAL_OPTIONS = [1, 2, 4, 8, 16, 32] as const;

export const multiDealCount = writable<number>(MULTI_DEAL_OPTIONS[0]);
export function setMultiDealCount(n: number) {
  multiDealCount.set(n);
}

export const partialDealSlots = writable<number[]>([0, 0, 0, 0]); // or however many slots you need
export function setPartialDealSlots(slots: number[]) {
  partialDealSlots.set(slots);
}