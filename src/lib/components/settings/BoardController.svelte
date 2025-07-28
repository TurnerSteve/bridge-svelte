<script lang="ts">
  import { Card, CardContent, CardHeader}  from '$lib/components/ui/card';

  import AlgorithmSetting from './AlgorithmSetting.svelte';
  import MultiDealSetting from './MultiDealSetting.svelte';
  import DealSlotSetting from './DealSlotSetting.svelte';
  import DeckViewSetting from './DeckViewSetting.svelte';
  import DealPointerSetting from './DealPointerSetting.svelte';
  
</script>

<div class="w-full px-5">
  <Card class="w-full px-5">
    <CardHeader>
      Dealing settings
    </CardHeader>
    <CardContent class="flex items-center gap-2">
      <DeckViewSetting />
      <AlgorithmSetting />
      <MultiDealSetting />
      <DealSlotSetting />
      <DealPointerSetting />
    </CardContent>
  </Card>
</div>