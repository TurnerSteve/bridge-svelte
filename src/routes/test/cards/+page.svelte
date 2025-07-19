<script lang="ts">
  import CardImage from './CardImage.svelte';

  const { hand } = $props<{
    hand: Record<'S' | 'H' | 'D' | 'C', string>; // e.g. { S: 'AKJ', H: 'Q98', ... }
  }>();

  const suits = ['S', 'H', 'D', 'C'] as const;
</script>

<div class="flex flex-col gap-2">
  {#each suits as suit}
    <div class="flex items-center gap-1">
      <span class="w-4 text-right font-bold">{suit}:</span>
      {#each hand[suit] as rank}
        <CardImage {rank} {suit} />
      {/each}
    </div>
  {/each}
</div>