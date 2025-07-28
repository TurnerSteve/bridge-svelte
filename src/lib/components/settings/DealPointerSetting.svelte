<script lang="ts">
  import NumberStepper from '$lib/components/multi-ui/NumberStepper.svelte';
  import { dealPointer, setDealPointer } from '$lib/stores';

  // No need for a separate local pointer — just use $dealPointer
  const min = 0;
  const max = 1028; 
</script>

<div class="font-bold"> Deal pointer</div>
<NumberStepper
  value={$dealPointer}
  {min}
  {max}
  onChange={setDealPointer}
/>