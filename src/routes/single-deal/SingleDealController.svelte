<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import CardContent from '$lib/components/ui/CardContent.svelte';

  import { algorithm } from '$lib/stores/algorithm';
  import { partialDealSlots } from '$lib/stores/settings';
  import { storedDeals, updateDeal } from '$lib/stores/dealStore';
  import { createBoard } from '$lib/bridge/utils/createBoard';

  import { onMount } from 'svelte';

  // On mount, force a single deal if none exists
  onMount(() => {
    const boardNo = 0;
    console.log(
      `Board ${boardNo} uses algo "${$algorithm}" and slots[${$partialDealSlots}]`
    );

    if ($storedDeals.length === 0) {
      const board = createBoard(boardNo, $algorithm, $partialDealSlots);
      updateDeal(0, board);
    }
  });

  function performDeal() {
    const newBoardNo = ($storedDeals[0].boardNo % 16) + 1;
    const board = createBoard(newBoardNo, $algorithm, $partialDealSlots);
    const len = $storedDeals.length;
    console.log(
      `New Board[${len}:${newBoardNo}] using algo "${$algorithm}"`
    );
    updateDeal(0, board);
  }
</script>

<div class="w-full px-5">
  <Card classProp="w-full px-5">
    <CardContent>
      <Button
        class="mb-4 p-2 bg-blue-500 text-white rounded"
        on:click={performDeal}
      >
        Redeal
      </Button>
    </CardContent>
  </Card>
</div>
