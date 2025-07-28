<script module lang="ts">
	export type ComponentProps = {};
</script>

<script lang="ts">
	import { algorithm, setAlgorithm } from '$lib/stores/algorithm';
	import { Algorithm } from '$lib/types/bridge';
	import * as Select from '$lib/components/ui/select';

	let selected = $state<string>($algorithm);

	$effect(() => {
		if (Object.values(Algorithm).includes(selected as Algorithm)) {
			setAlgorithm(selected as Algorithm);
		}
	});

	// Example: HomeGrown and Random are disabled
	const items = [
		{ value: Algorithm.Pavlicek, label: Algorithm.Pavlicek, disabled: false },
		{ value: Algorithm.FisherYates, label: Algorithm.FisherYates, disabled: false },
		{ value: Algorithm.HomeGrown, label: Algorithm.HomeGrown, disabled: true },
		{ value: Algorithm.Random, label: Algorithm.Random, disabled: true },
	];
</script>

<p class="mt-0 font-bold">Card dealing algorithm : {$algorithm}</p>
<Select.Root type="single" bind:value={selected}>
	<Select.Trigger
		class="w-[180px] font-semibold bg-blue-500 text-white hover:text-black transition-colors"
	>
		{$algorithm}
	</Select.Trigger>
	<Select.Content class="bg-white dark:bg-gray-900">
		{#each items as item}
			<Select.Item
				value={item.value}
				disabled={item.disabled}
				class="
					{selected === item.value ? 'bg-blue-500 text-white' : ''}
					{item.disabled 
						? 'text-gray-400 bg-transparent cursor-not-allowed' 
						: 'hover:bg-blue-100 hover:text-black'}
					transition-colors
				"
			>
				{item.label}
			</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
