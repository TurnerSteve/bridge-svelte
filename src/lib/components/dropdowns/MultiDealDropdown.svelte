<script lang="ts">
  import { multiDealCount, setMultiDealCount, MULTI_DEAL_OPTIONS } from '$lib/stores/settings';
  import { onMount } from 'svelte';

  let open = $state(false);
  let menuRef: HTMLDivElement;

  // Close dropdown on outside click
  function handleClick(event: MouseEvent) {
    if (open && menuRef && !menuRef.contains(event.target as Node)) {
      open = false;
    }
  }
  onMount(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  });
</script>

<div class="relative inline-block" bind:this={menuRef}>
  <button
    type="button"
    class="px-4 py-2 bg-blue-500 text-white rounded"
    aria-haspopup="true"
    aria-expanded={open}
    onclick={() => (open = !open)}
  >
    Multi Deal Count: {$multiDealCount}
  </button>

  {#if open}
    <div
      class="absolute z-10 mt-2 w-64 rounded bg-white shadow-lg border p-2"
      role="menu"
      aria-label="Select multi deal count"
    >
      <div role="radiogroup" class="space-y-1">
        {#each MULTI_DEAL_OPTIONS as opt}
          <button
            type="button"
            role="radio"
            aria-checked={$multiDealCount === opt}
            tabindex="0"
            class="flex items-center w-full px-4 py-2 text-left hover:bg-blue-100"
            onclick={() => {
              setMultiDealCount(opt);
              open = false;
            }}
          >
            <span
              class="inline-block w-4 h-4 rounded-full mr-2 border"
              class:bg-blue-500={$multiDealCount === opt}
              class:border-gray-400={$multiDealCount !== opt}
            ></span>
            {opt}
          </button>
        {/each}
      </div>

      <div class="mt-2 flex items-center gap-2 px-4 py-2">
        <input
          type="number"
          min="1"
          class="w-16 border px-1 py-0.5 rounded text-right"
          bind:value={$multiDealCount}
          placeholder="Any"
          oninput={() => setMultiDealCount(Number($multiDealCount) || 1)}
        />
        <span>Custom</span>
      </div>
    </div>
  {/if}
</div>
