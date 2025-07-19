<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardHeader, CardContent }  from '$lib/components/ui/card';

  // You might need to install `lucide-svelte` or use your own export icon
  import { FileDown } from 'lucide-svelte'; // Svelte icon as example

  import { storedDeals } from '$lib/stores/dealStore';
  import { exportDeals } from '$lib/bridge/file-generation/exportDeals';

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
  <CardHeader class="text-lg font-bold mb-4">
    Export Deals in chosen format.
  </CardHeader>
  <CardContent class="flex flex-col gap-2">
    {#each ['PBN','LIN','CSV','XML','TEXT','JSON','DGE','BRI','DUP'] as format}
      <Button
        class="w-30 px-4 py-2 rounded flex items-center gap-2"
        onclick={() => handleExport(format)}
      >
        {format} <FileDown size={18} />
      </Button>
    {/each}
  </CardContent>
</Card>