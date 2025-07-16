<script lang="ts">
  import { partialDealSlots, setPartialDealSlots } from '$lib/stores/settings';
  import NumberSelector from './NumberSelector.svelte';

  // Handler for changes in any selector
  function handleSelectorChange(index: number, newValue: number) {
    const updatedValues = [...$partialDealSlots];
    updatedValues[index] = newValue;
    setPartialDealSlots(updatedValues);
  }
</script>

<div class="space-y-4">
  {#each $partialDealSlots as value, index}
    <NumberSelector
      value={value}
      on:change={(e) => handleSelectorChange(index, e.detail)}
    />
  {/each}
  <div class="mt-4 p-4 bg-gray-100 rounded">
    <h2 class="text-lg font-bold">Selector Values:</h2>
    <p>{JSON.stringify($partialDealSlots)}</p>
  </div>
</div>