<!-- NumberStepper.svelte -->
<script lang="ts">
  import { ChevronUp, ChevronDown, ChevronsUp, ChevronsDown } from 'lucide-svelte';

  // destructure props: value, min, max, and the onchange callback
  let {
    value = 0,
    min = 0,
    max = 100,
    onchange = (_: number) => {}
  } = $props<{
    value?: number;
    min?: number;
    max?: number;
    onchange?: (v: number) => void;
  }>();

  // reactive internal state
  let count = $state(value);

  // keep in sync if parent updates `value`
  $effect(() => {
    if (value !== count) count = value;
  });

  // clamp & notify parent
  function update(newVal: number) {
    count = Math.min(Math.max(newVal, min), max);
    onchange(count);
  }

  const inc   = () => update(count + 1);
  const dec   = () => update(count - 1);
  const toMin = () => update(min);
  const toMax = () => update(max);

  // keyboard support: arrows + Home/End
  function handleKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowRight':
        inc(); e.preventDefault();
        break;
      case 'ArrowDown':
      case 'ArrowLeft':
        dec(); e.preventDefault();
        break;
      case 'Home':
        toMin(); e.preventDefault();
        break;
      case 'End':
        toMax(); e.preventDefault();
        break;
    }
  }
</script>

<div class="inline-flex items-center space-x-1">
  <button type="button" onclick={toMin} aria-label="go to min" class="p-1 border rounded">
    <ChevronsDown size={16} />
  </button>
  <button type="button" onclick={dec} aria-label="decrement" class="p-1 border rounded">
    <ChevronDown size={16} />
  </button>

  <input
    type="number"
    bind:value={count}
    {min}
    {max}
    onkeydown={handleKeydown}
    class="w-16 text-center border rounded"
  />

  <button type="button" onclick={inc} aria-label="increment" class="p-1 border rounded">
    <ChevronUp size={16} />
  </button>
  <button type="button" onclick={toMax} aria-label="go to max" class="p-1 border rounded">
    <ChevronsUp size={16} />
  </button>
</div>