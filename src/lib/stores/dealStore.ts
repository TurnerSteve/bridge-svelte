import { writable } from 'svelte/store';
import { Algorithm } from '$lib/types/bridge';
import { createEmptyDealStruct, type Board } from '$lib/types/structs';

// ---- Store Values ----

function createDealStore() {
	// State
	const storedDeals = writable<Board[]>([createEmptyStoredDeal()]);
	const dealPointer = writable<number>(0);

	// Functions
	function appendDeal(newDeal: Board) {
		storedDeals.update((prevDeals) => [...prevDeals, newDeal]);
	}

	function updateDeal(index: number, newDeal: Board) {
		storedDeals.update((prev) => prev.map((item, idx) => (idx === index ? newDeal : item)));
	}

	function setDealPointer(index: number) {
		// const maxDeal = get(storedDeals).length - 1;
		// const clamped = Math.max(0, Math.min(index, maxDeal));
		const maxDeal = 1024;
		const clamped = Math.max(0, Math.min(index, maxDeal));
		dealPointer.set(clamped);
	}

	return {
		storedDeals,
		dealPointer,
		setDealPointer,
		appendDeal,
		updateDeal
	};
}

export const dealStore = createDealStore();
export const { storedDeals, dealPointer, appendDeal, updateDeal, setDealPointer } = dealStore;

// ---- Helper ----
function createEmptyStoredDeal(): Board {
	return {
		boardNo: 0,
		algo: Algorithm.Pavlicek,
		description: '',
		deal: createEmptyDealStruct()
	};
}
