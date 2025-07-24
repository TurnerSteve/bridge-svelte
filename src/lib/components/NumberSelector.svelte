<!-- src/lib/components/selectors/NumberStepper.svelte.js -->
<script module lang="ts">
  export interface sProps {
    value?: number;
    min?: number;
    max?: number;
    onchange?: (v: number) => void;
  }
</script>

<script lang="ts">
  // Svelte 5 runes version with explicit callback prop (no dispatch)
  // Props: value, min, max, onchange
  const {
    value = 0,
    min = 0,
    max = 13,
    onchange = (_: number) => {}
  }: sProps = $props();

  // Internal reactive count
  let count = $state<number>(value);
  $effect(() => {
    if (value !== count) count = value;
  });

  // Helpers: clamp + callback
  function update(newVal: number) {
    const clamped = Math.min(Math.max(newVal, min), max);
    count = clamped;
    onchange(clamped);
  }

  function increment() {
    if (count < max) update(count + 1);
  }

  function decrement() {
    if (count > min) update(count - 1);
  }

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const parsed = parseInt(target.value, 10);
    if (!isNaN(parsed)) update(parsed);
  }
</script>

<div class="flex items-center space-x-2">
  <button
    type="button"
    class="p-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
    aria-label="decrement"
    onclick={decrement}
  >
    &larr;
  </button>

  <input
    type="number"
    bind:value={count}
    {min}
    {max}
    class="w-16 text-center border border-gray-300 rounded focus:ring focus:ring-opacity-50 focus:ring-indigo-500"
    oninput={handleInput}
  />

  <button
    type="button"
    class="p-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
    aria-label="increment"
    onclick={increment}
  >
    &rarr;
  </button>
</div>