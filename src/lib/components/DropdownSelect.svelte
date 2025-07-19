<!-- src/lib/components/selectors/Select.svelte.js -->
<script lang="ts">
  import { onMount } from 'svelte';

  // define a reusable type
  interface Option { label: string; value: any }

  // Destructure and type props, marking `selected` as bindable
  let {
    options = [] as { label: string; value: any }[],
    selected = $bindable<Option>(),
    placeholder = 'Select',
    className = '',
    onchange = (_: any) => {}
  } = $props<{
    options?: Option[];
    selected?: any;
    placeholder?: string;
    className?: string;
    onchange?: (value: any) => void;
  }>();

  // Local reactive state
  let open = $state(false);
  let menuRef = $state<HTMLElement | null>(null);  // ← now reactive

  // Compute the label to show
  let currentLabel = $state('');
  $effect(() => {
    currentLabel =
      options.find((o: Option) => o.value === selected)?.label ?? placeholder;
  });

  // Handle user picking an option
  function handleSelect(option: { label: string; value: any }) {
    selected = option.value;
    onchange(option.value);
    open = false;
  }

  // Close menu when clicking outside
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

<div class={"relative inline-block " + className}>
  <button
    type="button"
    class="flex items-center justify-between px-4 py-2 bg-blue-500 text-white rounded w-full"
    aria-haspopup="true"
    aria-expanded={open}
    onclick={() => (open = !open)}
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
          onclick={() => handleSelect(option)}
        >
          {option.label}
        </button>
      {/each}
    </div>
  {/if}
</div>