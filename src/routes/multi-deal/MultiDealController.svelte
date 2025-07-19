<script lang="ts">
  import { Card, CardHeader, CardContent } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';

  import { createBoard } from '$lib/bridge/utils/createBoard';
  import type { Board } from '$lib/types/structs';

  // Subscribe to Svelte stores
    import { algorithm } from '$lib/stores/algorithm';
  import { partialDealSlots, multiDealCount } from '$lib/stores/settings';
  import { storedDeals, appendDeal } from '$lib/stores/dealStore';

  const algo = $algorithm;
  const slots = $partialDealSlots;
  const count = $multiDealCount;

  const dealArray = $storedDeals;
  const storeSize = dealArray.length; // The numer of boards currently stored (zero offset)

  // Only for logging, Svelte doesn't use useEffect
  // but you can use $: blocks for "side effects" if needed.
  const firstBoard = storeSize;
  const lastBoard = firstBoard + count - 1;

  function performDeals() {


    for (let i = firstBoard; i <= lastBoard; i++) {
      const board: Board = createBoard(i, algo, slots);
      appendDeal(board); 
      console.log(`New Board[${i}] using algo "${algo}"`);
    }
  }
</script>

<div class="w-full px-5">
  <Card class="w-full px-5">
    <CardHeader>{algo} Multi deal boards [{firstBoard}:{lastBoard}]</CardHeader>
    <CardContent>
      <Button class="mb-4 p-2 bg-blue-500 text-white rounded" onclick={performDeals}>
        Redeal {count}
      </Button>
    </CardContent>
  </Card>
</div>