import { Algorithm } from '$lib/types/bridge';
import { writable } from 'svelte/store';


export const algorithm = writable<Algorithm>(Algorithm.Random);

export function setAlgorithm(algo: Algorithm) {
  algorithm.set(algo);
}