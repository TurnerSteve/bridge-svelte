<script module lang="ts">
	/**
	 * Props for DealButton:
	 * - icon: the Iconify icon name
	 * - label: text to display
	 * - onclick: click handler
	 * - disabled?: optional disabled state
	 */
	export type ComponentProps = {
		icon: string;
		label: string;
		onclick: () => void;
		disabled?: boolean;
	};
</script>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';

	const { icon, label, onclick, disabled = false } = $props();
</script>

<Button
	variant="ghost"
	class="flex items-center gap-2 bg-blue-600 text-white transition-transform hover:bg-blue-500 hover:text-black active:scale-95"
	{onclick}
	{disabled}
>
	<Icon {icon} width="20" height="20" />
	{label}
</Button>
