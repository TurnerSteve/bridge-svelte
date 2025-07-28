<script lang="ts">
	import DeckViewDropdown from '$lib/components/settings/DeckViewSetting.svelte';
	import UpdateBoardsPerDealset from '$lib/components/settings/MultiDealSetting.svelte';
	import UpdateSelectedDealingAlgo from '$lib/components/settings/AlgorithmSetting.svelte';
	import UpdateDealingSlots from '$lib/components/settings/DealSlotSetting.svelte';

	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import DealpointerSelector from '$lib/components/settings/DealPointerSetting.svelte';
</script>

<Card>
	<CardHeader class="text-2xl font-bold">Settings Page</CardHeader>
	<CardContent>
		<div class="flex flex-col gap-4">
			<Card class="flex-1 px-5">
				<DealpointerSelector />
			</Card>
			<Card class="flex-1 px-5">
				<UpdateDealingSlots />
			</Card>
			<Card class="flex-1 px-5">
				<UpdateBoardsPerDealset />
			</Card>
			<Card class="flex-1 px-5">
				<DeckViewDropdown />
			</Card>
			<Card class="flex-1 px-5">
				<UpdateSelectedDealingAlgo />
			</Card>
		</div>
	</CardContent>
</Card>
