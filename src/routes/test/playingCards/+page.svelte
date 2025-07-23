<!-- src/routes/test/SvgCardTest.svelte -->
<script lang="ts">
  import { svgCards } from '$lib/data/svgCards';
  import { suitOrder, rankOrder } from '$lib/types/constants';
  import type { Rank} from '$lib/types/cards';

  // Get rank keys in proper order
  const rankList = (Object.keys(rankOrder) as Rank[]).sort(
    (a, b) => rankOrder[a] - rankOrder[b]
  );
</script>

<h1 class="text-lg font-bold mb-6">SVG Full Card Rendering Test</h1>

<div class="space-y-0">
  {#each suitOrder as suit (suit)}
    <div class="flex flex-wrap gap-0 p-1
     m-1 ">
      {#each rankList as rank (rank)}
        {@const Card = svgCards[suit][rank] as typeof import('svelte').SvelteComponent}
        <Card size={100} />
      {/each}
    </div>
  {/each}
</div>