<script lang="ts">
	import NumberStepper from '$lib/components/multi-ui/NumberStepper.svelte';
	import { partialDealSlots } from '$lib/stores/partialDealSlots';

	const min = 0;
	const max = 13;
	const directions = ['North', 'East', 'South', 'West'];

	function updateSlot(index: number, value: number) {
		partialDealSlots.update((arr) => {
			const next = [...arr];
			next[index] = value;
			return next;
		});
	}
</script>

	<div class="font-bold"> Partial deal slots : Usually 13 each</div>
	<div class="flex flex-col gap-3">
		{#each $partialDealSlots as value, idx}
			<div class="flex items-center gap-3">
				<span class="w-12 text-right font-bold">{directions[idx]}:</span>
				<NumberStepper {value} {min} {max} onChange={(v) => updateSlot(idx, v)} />
				Cards
			</div>
		{/each}
	</div>
