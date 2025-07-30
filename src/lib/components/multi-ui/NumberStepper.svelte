<!-- NumberStepper.svelte -->
<script module lang="ts">
  /**
   * Props:
   * - value: current number
   * - min: minimum allowed
   * - max: maximum allowed
   * - onChange: callback when value changes
   */
  export type CProps = {
    value: number;
    min: number;
    max: number;
    onChange: (v: number) => void;
  };

  /**
   * Button config interface for stepper buttons
   */
  interface ButtonConfig {
    icon: string;
    handler: () => void;
    disabled: boolean;
    aria: string;
    key: string;
  }
</script>

<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import Icon from '@iconify/svelte';

  const { value, min, max, onChange }: CProps = $props();

  // Shared class for all stepper buttons
  const btnClass =
    'bg-blue-500 text-white transition-colors hover:bg-blue-100 hover:text-black ' +
    'active:bg-blue-300 border-none';

  // Reactive config array recomputed only when value, min, or max change
  let btnConfigs = $state<ButtonConfig[]> ([]);
  $effect(() => {
    btnConfigs = [
      {
        key: 'first',
        icon: 'lucide:chevron-first',
        handler: () => { if (value > min) onChange(min); },
        disabled: value <= min,
        aria: 'First'
      },
      {
        key: 'prev',
        icon: 'lucide:chevron-left',
        handler: () => { if (value > min) onChange(value - 1); },
        disabled: value <= min,
        aria: 'Previous'
      },
      {
        key: 'next',
        icon: 'lucide:chevron-right',
        handler: () => { if (value < max) onChange(value + 1); },
        disabled: value >= max,
        aria: 'Next'
      },
      {
        key: 'last',
        icon: 'lucide:chevron-last',
        handler: () => { if (value < max) onChange(max); },
        disabled: value >= max,
        aria: 'Last'
      }
    ];
  });
</script>

<div class="flex items-center gap-2">
  {#each btnConfigs as btn (btn.key)}
    <Button
      type="button"
      class={btnClass}
      onclick={btn.handler}
      disabled={btn.disabled}
      aria-label={btn.aria}
    >
      <Icon icon={btn.icon} width="20" height="20" />
    </Button>
    {#if btn.key === 'prev'}
      <!-- Value displayed between prev and next -->
      <span class="w-10 text-center font-mono text-lg">{value}</span>
    {/if}
  {/each}
</div>

