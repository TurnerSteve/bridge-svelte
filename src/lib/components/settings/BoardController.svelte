<script lang="ts">
  import { Card, CardHeader, CardContent } from '$lib/components/ui/card';
  import { Separator } from '$lib/components/ui/separator';
  import DeckViewSetting from './DeckViewSetting.svelte';
  import AlgorithmSetting from './AlgorithmSetting.svelte';
  import MultiDealSetting from './MultiDealSetting.svelte';
  import DealSlotSetting from './DealSlotSetting.svelte';
  import DealPointerSetting from './DealPointerSetting.svelte';
</script>

<div class="w-full px-5">
  <Card class="w-full px-5">
    <CardHeader style="font-bold">
      Dealing settings
    </CardHeader>
    <CardContent class="flex flex-col gap-4 items-start">
      <DeckViewSetting />
      <Separator class="my-0 border-t-2 border-blue-500" />
      <AlgorithmSetting />
      <Separator class="my-0 border-t-2 border-blue-500" />
      <MultiDealSetting />
      <Separator class="my-0 border-t-2 border-blue-500" />
      <DealSlotSetting />
      <Separator class="my-0 border-t-2 border-blue-500" />
      <DealPointerSetting />
    </CardContent>
  </Card>
</div>