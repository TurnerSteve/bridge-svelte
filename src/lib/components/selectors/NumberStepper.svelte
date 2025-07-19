<!-- NumberStepper.svelte -->
<script module lang="ts">
  export type ComponentProps = {
    value?: number;
    min?: number;
    max?: number;
    onchange?: (v: number) => void;
  };

</script>

<script lang="ts">
  import Icon from '@iconify/svelte';

  // destructure props: value, min, max, and the onchange callback
  const { value = 0, min = 0, max = 100, onchange = () => {} } = $props<ComponentProps>();

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
    <Icon icon="mdi:chevron-double-down" width="16" height="16" />
  </button>
  <button type="button" onclick={dec} aria-label="decrement" class="p-1 border rounded">
    <Icon icon="mdi:chevron-down" width="16" height="16" />
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
    <Icon icon="mdi:chevron-up" width="16" height="16" />
  </button>
  <button type="button" onclick={toMax} aria-label="go to max" class="p-1 border rounded">
    <Icon icon="mdi:chevron-double-up" width="16" height="16" />
  </button>
</div>