<script lang="ts">
	import { deckview, setDeckview } from '$lib/stores';
	import { Deckview } from '$lib/types/cards';
	import * as Select from '$lib/components/ui/select';

	let selected = $state<string>($deckview);

	const items = [
		{ value: Deckview.UNICODE, label: "Unicode", disabled: false },
		{ value: Deckview.SVG1, label: "SVG 1", disabled: false },
		{ value: Deckview.SVG2, label: "SVG 2", disabled: false },
		{ value: Deckview.ICON, label: "Icon", disabled: false },
		{ value: Deckview.TEXT, label: "Text", disabled: false },
		{ value: Deckview.PNG, label: "PNG", disabled: true },
	];

	$effect(() => {
		if (Object.values(Deckview).includes(selected as Deckview)) {
			setDeckview(selected as Deckview);
		}
	});

</script>

<p class="mt-0 font-bold">Playing card display : {$deckview}</p>
<Select.Root type="single" bind:value={selected}>
	<Select.Trigger
		class="w-[180px] font-semibold bg-blue-500 text-white hover:text-black transition-colors"
	>
		{$deckview}
	</Select.Trigger>
	<Select.Content class="bg-white dark:bg-gray-900">
		{#each items as item}
			<Select.Item
				value={item.value.toString()}
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