<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let value: number;
  const dispatch = createEventDispatcher();

  function increment() {
    if (value < 13) dispatch('change', value + 1);
  }
  function decrement() {
    if (value > 0) dispatch('change', value - 1);
  }
  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const newValue = parseInt(target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 13) {
      dispatch('change', newValue);
    }
  }
</script>

<div class="flex items-center space-x-2">
  <button
    class="p-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
    type="button"
    on:click={decrement}
  >
    &larr;
  </button>
  <input
    type="number"
    min="0"
    max="13"
    class="w-16 text-center border border-gray-300 rounded focus:ring focus:ring-opacity-50 focus:ring-indigo-500"
    {value}
    on:input={handleInput}
  />
  <button
    class="p-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
    type="button"
    on:click={increment}
  >
    &rarr;
  </button>
</div>