<script lang="ts">
  import NumberStepper from '$lib/components/multi-ui/NumberStepper.svelte';
  import { dealPointer, setDealPointer, storedDeals } from '$lib/stores';

  // No need for a separate local pointer — just use $dealPointer
    // 1. Import Svelte’s derived
  import { derived } from 'svelte/store';

  // 2. Derive the maximum index as a number

  const maxStore = derived(storedDeals, $storedDeals => $storedDeals.length - 1);
</script>

<div class="font-bold"> Deal pointer</div>
<NumberStepper
  value={$dealPointer}
  min={1}
  max={$maxStore}
  onChange={setDealPointer}
/>