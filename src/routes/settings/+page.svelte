<script lang="ts">
  import DeckViewDropdown from '$lib/components/dropdowns/DeckViewDropdown.svelte';
  import UpdateBoardsPerDealset from '$lib/components/UpdateBoardsPerDealset.svelte';
  import UpdateSelectedDealingAlgo from '$lib/components/UpdateDealingAlgo.svelte';
  import UpdateDealingSlots from '$lib/components/UpdateDealingSlots.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import CardContent from '$lib/components/ui/CardContent.svelte';
  import CardHeader from '$lib/components/ui/CardHeader.svelte';
</script>

<Card>
  <CardHeader classProp="text-2xl font-bold">Settings Page</CardHeader>
  <CardContent>
    <div class="flex flex-row gap-4">
      <Card classProp="flex-1 px-5">
        <CardHeader classProp="text-0xl font-bold">Dealing Slots</CardHeader>
        <UpdateDealingSlots />
      </Card>
      <Card classProp="flex-1 px-5">
        <CardHeader classProp="text-0xl font-bold px-4">Boards per deal set</CardHeader>
        <UpdateBoardsPerDealset />
        <DeckViewDropdown />
      </Card>
      <Card classProp="flex-1 px-5">
        <CardHeader classProp="text-0xl font-bold">Dealing Algorithm</CardHeader>
        <UpdateSelectedDealingAlgo />
      </Card>
    </div>
  </CardContent>
</Card>