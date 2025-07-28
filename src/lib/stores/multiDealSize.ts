import { writable } from 'svelte/store';

export const MULTI_DEAL_OPTIONS = [1, 2, 4, 8, 16, 32] as const;

export const multiDealSize = writable<number>(MULTI_DEAL_OPTIONS[0]);
export function setMultiDealSize(n: number) {
  multiDealSize.set(n);
}

