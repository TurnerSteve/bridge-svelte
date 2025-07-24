<script lang="ts">
  import DropdownSelect from '$lib/components/DropdownSelect.svelte';
  import { algorithm, setAlgorithm } from '$lib/stores/algorithm';
  import { Algorithm } from '$lib/types/bridge';

  const options = Object.values(Algorithm).map(algo => ({
    label: algo,
    value: algo
  }));
</script>

<DropdownSelect
  {options}
  selected={$algorithm}
  onchange={(e) => setAlgorithm(e.detail)}
  placeholder="Dealing algorithm"
/>