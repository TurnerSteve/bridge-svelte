<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  import CardContent from '$lib/components/ui/CardContent.svelte';
  import CardHeader from '$lib/components/ui/CardHeader.svelte';
  import AlgorithmDropdown from './AlgorithmDropdown.svelte';
  import MultiDealDropdown from './MultiDealDropdown.svelte';
  import PartialDealControls from './PartialDealControls.svelte';
  import DeckViewDropdown from './DeckViewDropdown.svelte';
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