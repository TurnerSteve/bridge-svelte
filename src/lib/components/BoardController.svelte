<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  import CardContent from '$lib/components/ui/CardContent.svelte';
  import CardHeader from '$lib/components/ui/CardHeader.svelte';
  import AlgorithmDropdown from './dropdowns/AlgorithmDropdown.svelte';
  import MultiDealDropdown from './dropdowns/MultiDealDropdown.svelte';
  import PartialDealControls from './dropdowns/PartialDealControls.svelte';
  import DeckViewDropdown from './dropdowns/DeckViewDropdown.svelte';
</script>

<div class="w-full px-5">
  <Card classProp="w-full px-5">
    <CardHeader>
      Dealing settings
    </CardHeader>
    <CardContent classProp="flex items-center gap-2">
      <DeckViewDropdown />
      <AlgorithmDropdown />
      <MultiDealDropdown />
      <PartialDealControls />
    </CardContent>
  </Card>
</div>