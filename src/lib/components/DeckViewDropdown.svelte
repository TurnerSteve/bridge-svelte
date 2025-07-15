<script lang="ts">
  import { onMount } from 'svelte';
  import { deckView, setDeckView, DeckView } from '$lib/stores/deckView';

  let open = false;
  let menuRef: HTMLElement | null = null;

  function handleClick(event: MouseEvent) {
    if (open && menuRef && !menuRef.contains(event.target as Node)) {
      open = false;
    }
  }

  onMount(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  });

  const options = Object.values(DeckView);
  $: current = $deckView;
</script>

<div class="relative inline-block" bind:this={menuRef}>
  <button
    type="button"
    class="mb-4 p-2 rounded bg-blue-500 text-white"
    aria-haspopup="true"
    aria-expanded={open}
    on:click={() => open = !open}
  >
    Display card as {current}s
  </button>
  {#if open}
    <div
      class="absolute z-10 mt-2 w-48 rounded bg-white shadow-lg border"
      style="min-width: 180px"
    >
      <div class="px-4 py-2 font-semibold text-gray-600">Select Deck View</div>
      <div class="h-px bg-gray-200 my-2"></div>
      {#each options as view}
        <button
          type="button"
          class="w-full text-left px-4 py-2 cursor-pointer hover:bg-blue-100 flex items-center"
          role="radio"
          aria-checked={current === view}
          tabindex="0"
          on:click={() => {
            setDeckView(view);
            open = false;
          }}
        >
          <span
            class="inline-block w-4 h-4 rounded-full border mr-2"
            class:bg-blue-500={current === view}
            class:border-blue-600={current === view}
            class:border-gray-400={current !== view}
          ></span>
          {view}
        </button>
      {/each}
    </div>
  {/if}
</div>