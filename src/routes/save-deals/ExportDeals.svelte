<script lang="ts">
	import { Card, CardHeader, CardContent } from '$lib/components/ui/card';

	import { storedDeals } from '$lib/stores/dealStore';
	import { exportDeals } from '$lib/bridge/file-generation/exportDeals';
	import DealButton from '$lib/components/multi-ui/DealButton.svelte';

	// Helper: Download text as file
	function downloadFile(content: string, format: string) {
		const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `deals.${format.toLowerCase()}`;
		a.click();
		URL.revokeObjectURL(url);
	}

	function handleExport(format: string) {
		let output = '';
		switch (format) {
			case 'JSON':
				output = exportDeals.toJSON($storedDeals);
				break;
			case 'CSV':
				output = exportDeals.toCSV($storedDeals);
				break;
			case 'TEXT':
				output = exportDeals.toTEXT($storedDeals);
				break;
			case 'XML':
				output = exportDeals.toXML($storedDeals);
				break;
			case 'PBN':
				output = exportDeals.toPBN($storedDeals);
				break;
			case 'LIN':
				output = exportDeals.toLIN($storedDeals);
				break;
			case 'DGE':
				output = exportDeals.toDGE($storedDeals);
				break;
			case 'DUP':
				output = exportDeals.toDUP($storedDeals);
				break;
			case 'BRI':
				output = exportDeals.toBRI($storedDeals);
				break;
			default:
				break;
		}
		if (output) {
			downloadFile(output, format);
		}
	}
</script>

<Card class="px-5">
	<CardHeader class="mb-4 text-lg font-bold">Export Deals in chosen format.</CardHeader>
	<CardContent class="flex flex-col gap-2">
		{#each ['PBN', 'LIN', 'CSV', 'XML', 'TEXT', 'JSON', 'DGE', 'BRI', 'DUP'] as format}
			<DealButton icon="line-md:download-loop" label={format} onclick={handleExport(format)} />
		{/each}
	</CardContent>
</Card>
