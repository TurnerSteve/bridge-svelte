<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { algorithm, setAlgorithm, Algorithm } from '$lib/stores/algorithm';

  let open = false;
  let menuRef: HTMLElement | null = null;

  function handleClick(event: MouseEvent) {
    if (open && menuRef && !menuRef.contains(event.target as Node)) {
      open = false;
    }
  }

  onMount(() => {
    document.addEventListener('mousedown', handleClick);
  });

  onDestroy(() => {
    document.removeEventListener('mousedown', handleClick);
  });

  const options = Object.values(Algorithm);
  $: current = $algorithm;
</script>

<div class="relative inline-block" bind:this={menuRef}>
  <button
    type="button"
    class="px-4 py-2 rounded bg-blue-500 text-white"
    aria-haspopup="true"
    aria-expanded={open}
    on:click={() => open = !open}
  >
    Algorithm: {current}
  </button>
  {#if open}
    <div
      class="absolute z-10 mt-2 w-48 rounded bg-white shadow-lg border"
      style="min-width: 180px"
    >
      <div class="px-4 py-2 font-semibold text-gray-600">Select Algorithm</div>
      <div class="h-px bg-gray-200 my-2"></div>
      {#each options as algo}
        <button
          type="button"
          class="w-full text-left px-4 py-2 cursor-pointer hover:bg-blue-100 flex items-center"
          role="radio"
          aria-checked={current === algo}
          tabindex="0"
          on:click={() => {
            setAlgorithm(algo);
            open = false;
          }}
        >
          <span
            class="inline-block w-4 h-4 rounded-full border mr-2"
            class:bg-blue-500={current === algo}
            class:border-blue-600={current === algo}
            class:border-gray-400={current !== algo}
          ></span>
          {algo}
        </button>
      {/each}
    </div>
  {/if}
</div>