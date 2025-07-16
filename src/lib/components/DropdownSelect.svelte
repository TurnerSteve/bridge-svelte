<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';

  export let options: { label: string, value: any }[] = [];
  export let selected: any = null;
  export let placeholder: string = 'Select';
  export let className: string = '';
  const dispatch = createEventDispatcher();

  let open = false;
  let menuRef: HTMLElement | null = null;

  function handleSelect(option: { label: string, value: any }) {
    dispatch('change', option.value);
    open = false;
  }

  function handleClick(event: MouseEvent) {
    if (open && menuRef && !menuRef.contains(event.target as Node)) {
      open = false;
    }
  }
  onMount(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  });

  // Helper for label
  $: currentLabel = options.find(o => o.value === selected)?.label ?? placeholder;
</script>

<div class={"relative inline-block " + className}>
  <button
    type="button"
    class="flex items-center justify-between px-4 py-2 bg-blue-500 text-white rounded w-full"
    aria-haspopup="true"
    aria-expanded={open}
    on:click={() => open = !open}
  >
    {currentLabel}
    <span class="ml-2">▼</span>
  </button>
  {#if open}
    <div
      bind:this={menuRef}
      class="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md p-2"
    >
      {#each options as option}
        <button
          type="button"
          class="w-full text-left hover:bg-gray-200 p-2 rounded-md"
          on:click={() => handleSelect(option)}
        >
          {option.label}
        </button>
      {/each}
    </div>
  {/if}
</div>