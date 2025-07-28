import { Algorithm } from '$lib/types/bridge';
import { writable } from 'svelte/store';


export const algorithm = writable<Algorithm>(Algorithm.Pavlicek);

export function setAlgorithm(algo: Algorithm) {
  algorithm.set(algo);
}