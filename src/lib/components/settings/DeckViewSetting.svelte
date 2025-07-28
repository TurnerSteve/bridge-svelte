<script module lang="ts">
	export type ComponentProps = {};
</script>

<script lang="ts">
	import { deckview, setDeckview } from '$lib/stores';
	import { Deckview } from '$lib/types/cards';
	import * as Select from '$lib/components/ui/select';

	// Use $algorithm for two-way binding in Svelte 5 runes
	let selected = $state<string>($deckview);

	// keep the store and local state in sync
	$effect(() => {
		// Convert string back to Algorithm enum before setting
		if (Object.values(Deckview).includes(selected as Deckview)) {
			setDeckview(selected as Deckview);
		}
	});
</script>

<p class="mt-4 font-bold">Playing card display : {$deckview}</p>
<Select.Root type="single" bind:value={selected}>
	<Select.Trigger class="w-[180px]">{$deckview}</Select.Trigger>
	<Select.Content class="bg-white dark:bg-gray-900">
		<Select.Item value={Deckview.UNICODE.toString()}>{Deckview.UNICODE}</Select.Item>
		<Select.Item value={Deckview.SVG1.toString()}>{Deckview.SVG1}</Select.Item>
		<Select.Item value={Deckview.SVG2.toString()}>{Deckview.SVG2}</Select.Item>
		<Select.Item value={Deckview.ICON.toString()}>{Deckview.ICON}</Select.Item>
		<Select.Item value={Deckview.TEXT.toString()}>{Deckview.TEXT}</Select.Item>
		<Select.Item value={Deckview.PNG.toString()}>{Deckview.PNG}</Select.Item>
	</Select.Content>
</Select.Root>
