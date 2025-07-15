<script lang="ts">
  import { multiDealCount, setMultiDealCount, MULTI_DEAL_OPTIONS } from '$lib/stores/settings';
  import { onMount } from 'svelte';

  let open = false;
  let menuRef: HTMLElement | null = null;
  let customValue = '';

  // To close dropdown on outside click
  function handleClick(event: MouseEvent) {
    if (open && menuRef && !menuRef.contains(event.target as Node)) {
      open = false;
    }
  }
  onMount(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  });

  $: currentValue = $multiDealCount;
  $: isCustom = !MULTI_DEAL_OPTIONS.includes(currentValue as (typeof MULTI_DEAL_OPTIONS)[number]);
</script>

<div class="relative inline-block" bind:this={menuRef}>
  <button
    type="button"
    class="px-4 py-2 bg-blue-500 text-white rounded"
    aria-haspopup="true"
    aria-expanded={open}
    on:click={() => open = !open}
  >
    Multi Deal Count: {currentValue}
  </button>
  {#if open}
    <div class="absolute z-10 mt-2 w-64 rounded bg-white shadow-lg border p-2">
      {#each MULTI_DEAL_OPTIONS as opt}
        <button
          type="button"
          class="w-full text-left px-4 py-2 cursor-pointer hover:bg-blue-100 flex items-center"
          role="radio"
          aria-checked={currentValue === opt}
          tabindex="0"
          on:click={() => {
            setMultiDealCount(opt);
            customValue = '';
            open = false;
          }}
        >
          <span
            class="inline-block w-4 h-4 rounded-full border mr-2"
            class:bg-blue-500={currentValue === opt}
            class:border-blue-600={currentValue === opt}
            class:border-gray-400={currentValue !== opt}
          ></span>
          {opt}
        </button>
      {/each}
      <!-- Custom option -->
      <div class="flex items-center gap-2 px-4 py-2">
        <input
          type="number"
          min={1}
          class="w-16 border px-1 py-0.5 rounded text-right"
          bind:value={customValue}
          placeholder="Any"
          on:input={(e) => {
            const val = (e.target as HTMLInputElement).value.replace(/\D/g, '');
            customValue = val;
            if (val) setMultiDealCount(Number(val));
          }}
          on:focus={() => setMultiDealCount(Number(customValue) || 1)}
        />
        <span>Custom</span>
        {#if isCustom && customValue === ''}
          <span class="ml-2 text-sm text-gray-400">(Current: {currentValue})</span>
        {/if}
      </div>
    </div>
  {/if}
</div>