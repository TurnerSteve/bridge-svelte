<script lang="ts">
	import { multiDealSize, setMultiDealSize } from '$lib/stores';
	import * as Slider from '$lib/components/ui/slider';

	const sizes = [4, 8, 16, 24, 32, 48, 1024];
	let idx = $state<number>(sizes.indexOf($multiDealSize));
	$effect(() => {
		setMultiDealSize(sizes[idx]);
	});
</script>

<div class="mb-2 font-bold">
	Boards per dealset: <span class="ml-2 font-mono text-blue-600">{sizes[idx]}</span>
</div>

<div class="relative mb-4 flex h-0 w-full items-center">
	<!-- Filled track -->
	<div
		class="absolute top-1/2 left-0 h-3 -translate-y-1/2 rounded transition-all duration-300"
		style="width: {(idx / (sizes.length - 1)) * 100}%; background: #2563eb;"
	></div>
	<!-- Unfilled track -->
	<div
		class="absolute top-1/2 right-0 h-3 -translate-y-1/2 rounded bg-gray-300 transition-all duration-300"
		style="width: {(1 - idx / (sizes.length - 1)) * 100}%; left: {(idx / (sizes.length - 1)) * 100}%"
	></div>

	<!-- shadcn slider thumb (bubble) -->
	<Slider.Root
		type="single"
		min={0}
		max={sizes.length - 1}
		step={1}
		bind:value={idx}
		class="
	z-10 h-6 w-full
    [&_[data-slider-thumb]]:h-6
    [&_[data-slider-thumb]]:w-6
    [&_[data-slider-thumb]]:rounded-full
    [&_[data-slider-thumb]]:border-2
    [&_[data-slider-thumb]]:border-blue-500
    [&_[data-slider-thumb]]:bg-blue-500
    [&_[data-slider-thumb]]:shadow-lg
    [&_[data-slider-thumb]]:transition-all
    [&_[data-slider-thumb]:active]:shadow-xl
    [&_[data-slider-thumb]:hover]:bg-blue-400
    [&_[data-slider-thumb]:focus-visible]:bg-gray-600  /* <-- bubble goes grey on focus */
    [&_[data-slider-thumb]:focus-visible]:ring-40
    [&_[data-slider-thumb]:focus-visible]:ring-blue-300
		"
	/>
</div>

<div class="pointer-events-none relative flex w-full justify-between">
	{#each sizes as size, i}
		<span class="w-8 text-center text-xs {i === idx ? 'font-bold text-blue-600' : 'text-gray-600'}"
			style="{i === sizes.length-1 ? 'margin-right: -6px' : ''}">
			{size}
		</span>
	{/each}
</div>