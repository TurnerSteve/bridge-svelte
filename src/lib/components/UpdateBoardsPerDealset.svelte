<script lang="ts">
  import DropdownSelect from '$lib/components/DropdownSelect.svelte';
  import { multiDealCount, setMultiDealCount } from '$lib/stores/settings';

  const options = [
    { label: '4', value: 4 },
    { label: '8', value: 8 },
    { label: '16', value: 16 },
    { label: '24', value: 24 },
    { label: '32', value: 32 },
    { label: '48', value: 48 },
    { label: '1024', value: 1024 }
  ];
</script>

<DropdownSelect
  {options}
  selected={$multiDealCount}
  onchange={(e) => setMultiDealCount(e.detail)}
  placeholder="Boards per dealset"
/>