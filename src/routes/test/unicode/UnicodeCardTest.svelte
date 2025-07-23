<script lang="ts">
  import { unicodeCards } from '$lib/data/unicodeCards';
  import { suitOrder} from '$lib/types/constants';
  import CardUnicodeRenderer from '$lib/components/renderers/CardUnicodeRenderer.svelte';
  import { Rank } from '$lib/types/cards';
</script>

<h1 class="text-lg font-bold mb-4">Unicode Card Rendering Test</h1>

{#each suitOrder as suit}
  <div class="flex items-center gap-1 mb-2">
    <span class="w-12 text-sm font-bold"></span>
    {#each Object.values(Rank) as rank}
      <CardUnicodeRenderer symbol={unicodeCards[suit][rank]} size={10} />
    {/each}
  </div>
{/each}