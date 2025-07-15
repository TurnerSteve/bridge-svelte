import { writable } from 'svelte/store';

// Define your Algorithm enum:
export enum Algorithm {
  Random = 'Random',
  Dealer = 'Dealer',
  // ...add others as needed
}

export const algorithm = writable<Algorithm>(Algorithm.Random);

export function setAlgorithm(algo: Algorithm) {
  algorithm.set(algo);
}