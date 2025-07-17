<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  import CardContent from '$lib/components/ui/CardContent.svelte';
  import CardHeader from '$lib/components/ui/CardHeader.svelte';
  import Button from '$lib/components/ui/Button.svelte';


  import { createBoard } from '$lib/bridge/utils/createBoard';
  import type { Board } from '$lib/types/structs';

  // Subscribe to Svelte stores
    import { algorithm } from '$lib/stores/algorithm';
  import { partialDealSlots, multiDealCount } from '$lib/stores/settings';
  import { dealStore, appendDeal } from '$lib/stores/dealStore';
  const algo = algorithm;
  const slots = partialDealSlots;
  const count = multiDealCount;
  const deals = dealStore;
  
  const storeSize = deals.length;

  // Only for logging, Svelte doesn't use useEffect
  // but you can use $: blocks for "side effects" if needed.

  function performDeals() {
    const firstBoard = deals.length;
    const lastBoard = firstBoard + count - 1;

    for (let i = firstBoard; i <= lastBoard; i++) {
      const board: Board = createBoard(i, algo, slots);
      appendDeal(board); // Push to global store (your appendDeal should update the store)
      // Optionally: console.log(`New Board[${i}] using algo "${algo}"`);
    }
  }
</script>

<div class="w-full px-5">
  <Card classProp="w-full px-5">
    <CardHeader>{algo} Multi deal [{deals.length - 1}]</CardHeader>
    <CardContent>
      <Button class="mb-4 p-2 bg-blue-500 text-white rounded" on:click={performDeals}>
        Redeal {count}
      </Button>
    </CardContent>
  </Card>
</div>