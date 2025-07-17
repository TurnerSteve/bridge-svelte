<script lang="ts">
  import { partialDealSlots, setPartialDealSlots } from '$lib/stores/settings';

  // Helper to update a slot value within bounds
  function update(index: number, value: number) {
    const next = [...$partialDealSlots];
    next[index] = Math.max(0, Math.min(13, value));
    setPartialDealSlots(next);
  }
</script>

<div class="flex gap-4">
  {#each $partialDealSlots as val, idx}
    <div class="flex flex-col items-center">
      <button
        class="bg-gray-200 px-2 rounded mb-1"
        type="button"
        onclick={() => update(idx, val + 1)}
        disabled={val >= 13}
      >▲</button>
      <input
        type="number"
        min={0}
        max={13}
        class="w-12 text-center border rounded"
        bind:value={$partialDealSlots[idx]}
        oninput={(e) => update(idx, Number((e.target as HTMLInputElement).value))}
      />
      <button
        class="bg-gray-200 px-2 rounded mt-1"
        type="button"
        onclick={() => update(idx, val - 1)}
        disabled={val <= 0}
      >▼</button>
    </div>
  {/each}
</div>