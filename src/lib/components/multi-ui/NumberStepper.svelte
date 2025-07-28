<script module lang="ts">
	export type CProps = {
		value: number;
		min: number;
		max: number;
		onChange: (v: number) => void;
	};
</script>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';

	const { value, min, max, onChange }: CProps = $props();

	function  buttons() { return [
		{
			icon: "lucide:chevron-first",
			handler: () => { if (value > min) onChange(min); },
			disabled: value <= min,
			aria: "First"
		},
		{
			icon: "lucide:chevron-left",
			handler: () => { if (value > min) onChange(value - 1); },
			disabled: value <= min,
			aria: "Previous"
		},
		{
			icon: "lucide:chevron-right",
			handler: () => { if (value < max) onChange(value + 1); },
			disabled: value >= max,
			aria: "Next"
		},
		{
			icon: "lucide:chevron-last",
			handler: () => { if (value < max) onChange(max); },
			disabled: value >= max,
			aria: "Last"
		},
	]};
</script>

<div class="flex items-center gap-2">
	{#each buttons() as btn}
		<Button
			class="bg-blue-500 text-white transition-colors hover:bg-blue-100 hover:text-black active:bg-blue-300"
			variant="outline"
			onclick={btn.handler}
			disabled={btn.disabled}
			aria-label={btn.aria}
		>
			<Icon icon={btn.icon} width="20" height="20" />
		</Button>
	{/each}
	<span class="w-10 text-center font-mono text-lg">{value}</span>
</div>
