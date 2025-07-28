<script lang="ts">
	import { multiDealSize, setMultiDealSize } from '$lib/stores';
	import * as Slider from '$lib/components/ui/slider';

	const sizes = [4, 8, 16, 24, 32, 48, 1024];
	let idx = $state<number>(sizes.indexOf($multiDealSize));
	$effect(() => {
		setMultiDealSize(sizes[idx]);
	});
</script>

<div class="font-bold">
	Boards per dealset : {sizes[idx]}
</div>

<!-- Slider container, relative for custom ticks/track -->
<div class="relative flex h-12 w-full items-center">
	<!-- Custom track (line) -->
	<div class="absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2 rounded bg-gray-300"></div>

	<!-- The shadcn slider thumb (on top of the custom track) -->
	<Slider.Root
		type="single"
		min={0}
		max={sizes.length - 1}
		step={1}
		bind:value={idx}
		class="z-10 h-8 w-full"
	/>
</div>

<!-- Tick labels below the slider -->
<div class="pointer-events-none relative mt-2 flex w-full justify-between">
	{#each sizes as size}
		<span class="w-8 text-center text-xs">{size}</span>
	{/each}
</div>
