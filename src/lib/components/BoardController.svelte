<script lang="ts">
  import { Card, CardContent, CardHeader}  from '$lib/components/ui/card';


  import AlgorithmDropdown from './dropdowns/AlgorithmDropdown.svelte';
  import MultiDealDropdown from './dropdowns/MultiDealDropdown.svelte';
  import PartialDealControls from './dropdowns/PartialDealControls.svelte';
  import DeckViewDropdown from './dropdowns/DeckViewDropdown.svelte';
</script>

<div class="w-full px-5">
  <Card class="w-full px-5">
    <CardHeader>
      Dealing settings
    </CardHeader>
    <CardContent class="flex items-center gap-2">
      <DeckViewDropdown />
      <AlgorithmDropdown />
      <MultiDealDropdown />
      <PartialDealControls />
    </CardContent>
  </Card>
</div>