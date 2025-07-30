<!-- MultiDealController.svelte -->
<script lang="ts">
  import NumberStepper from '$lib/components/multi-ui/NumberStepper.svelte';
  import DealButton    from '$lib/components/multi-ui/DealButton.svelte';

  import { createBoard } from '$lib/bridge/utils/createBoard';
  import { algorithm }   from '$lib/stores/algorithm';
  import { partialDealSlots } from '$lib/stores/partialDealSlots';
  import { multiDealSize }    from '$lib/stores/multiDealSize';
  import {
    storedDeals,
    appendDeal,
    dealPointer,
    setDealPointer
  } from '$lib/stores/dealStore';

  import type { Board } from '$lib/types/structs';

  // 1. Import Svelte’s derived
  import { derived } from 'svelte/store';

  // 2. Derive the maximum index as a number
  const maxIndex = derived(storedDeals, $storedDeals => $storedDeals.length - 1);

  // 3. No need to derive pointer — use the store directly
  //    dealPointer is already a Writable<number>
  
  // Redeal N boards and then jump to the first of them
  function performRedeals() {
    const start = $storedDeals.length;      // current length
    const count = $multiDealSize;          // how many to deal
    const algo  = $algorithm;
    const slots = $partialDealSlots;

    for (let i = 0; i < count; i++) {
      const boardNo = start + 1 + i;
      const board: Board = createBoard(boardNo, algo, slots);
      appendDeal(board);
      // console.log(`New Board[${boardNo}] using algo "${algo}"`);
    }
    setDealPointer(start); // point at the first new board
  }
</script>

<div class="flex flex-col items-center space-y-4 w-full px-4">
  <!-- 4. Now maxIndex is a number, no TS error -->
  <NumberStepper
    value={$dealPointer}
    min={1}
    max={$maxIndex}
    onChange={setDealPointer}
  />

  <DealButton
    icon="mdi:cards-playing"
    label={`Deal ${$multiDealSize} Boards`}
    onclick={performRedeals}
  />
</div>