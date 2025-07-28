<script module lang="ts">
	export type ComponentProps = {};
</script>

<script lang="ts">
	import { algorithm, setAlgorithm } from '$lib/stores/algorithm';
	import { Algorithm} from '$lib/types/bridge';
	import * as Select  from '$lib/components/ui/select';

	// Use $algorithm for two-way binding in Svelte 5 runes
	let selected = $state<string>($algorithm);

	// keep the store and local state in sync
	$effect(() => {
		// Convert string back to Algorithm enum before setting
	    if (Object.values(Algorithm).includes(selected as Algorithm)) {
      setAlgorithm(selected as Algorithm);
    }
	});
</script>

<p class="mt-4 font-bold" >Card dealing algorithm : {$algorithm}</p>
<Select.Root type="single" bind:value={selected}>
    <Select.Trigger class="w-[180px]">{$algorithm}</Select.Trigger>
  <Select.Content class="bg-white dark:bg-gray-900">
		<Select.Item value={Algorithm.Pavlicek.toString()}>{Algorithm.Pavlicek}</Select.Item>
		<Select.Item value={Algorithm.FisherYates.toString()}>{Algorithm.FisherYates}</Select.Item>
		<Select.Item value={Algorithm.HomeGrown.toString()}>{Algorithm.HomeGrown}</Select.Item>
		<Select.Item value={Algorithm.Random.toString()}>{Algorithm.Random}</Select.Item>
  </Select.Content>
</Select.Root>
