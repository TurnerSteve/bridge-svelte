<script module lang="ts">
	export type ComponentProps = {
		dealPointer: number;
		maxDeal: number;
		minDeal?: number;
		updateDealPointer: (newPointer: number) => void;
	};
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';

	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';

	const { dealPointer, maxDeal, minDeal = 1, updateDealPointer } = $props();

	// Handlers for navigation
	function goToMinInt() {
		if (dealPointer > minDeal) updateDealPointer(minDeal);
	}
	function decrement() {
		if (dealPointer > minDeal) updateDealPointer(dealPointer - 1);
	}
	function increment() {
		if (dealPointer < maxDeal) updateDealPointer(dealPointer + 1);
	}
	function goToMaxInt() {
		if (dealPointer < maxDeal) updateDealPointer(maxDeal);
	}
</script>

<div class="flex flex-col items-center space-y-4">
	<div class="text-2xl font-bold">Deal Selector</div>
	<div class="flex space-x-2">
		<Button onclick={goToMinInt} variant="outline" disabled={dealPointer <= minDeal}>
			<Icon icon="mdi:chevron-double-left" class="h-5 w-5" />
		</Button>
		<Button onclick={decrement} variant="outline" disabled={dealPointer <= minDeal}>
			<Icon icon="mdi:chevron-left" class="h-5 w-5" />
		</Button>
		<Badge variant="outline">{dealPointer}</Badge>
		<Button onclick={increment} variant="outline" disabled={dealPointer >= maxDeal}>
			<Icon icon="mdi:chevron-right" class="h-5 w-5" />
		</Button>
		<Button onclick={goToMaxInt} variant="outline" disabled={dealPointer >= maxDeal}>
			<Icon icon="mdi:chevron-double-right" class="h-5 w-5" />
		</Button>
	</div>
</div>
