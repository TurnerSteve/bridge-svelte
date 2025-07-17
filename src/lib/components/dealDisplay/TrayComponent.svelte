<script lang="ts">
  import { getTrayInfo, type LookupEntry } from '$lib/bridge/utils';
  import Card from '$lib/components/ui/Card.svelte';
  import CardHeader from '$lib/components/ui/CardHeader.svelte';


  const { boardId } = $props<{ boardId: number }>();
  const board = $derived(() : LookupEntry => getTrayInfo(boardId));

</script>

<Card classProp="w-full px-5">
  <CardHeader classProp="h-5">The Dealing Tray</CardHeader>
  <Card classProp="h-6 pl-4 justify-center">Board [{boardId}]</Card>
  <Card classProp="h-6 pl-5 justify-center">Dealer [{board()?.dealer }]</Card>
  <Card classProp="h-6 pl-4 justify-center">Vulnerable [{board()?.vulnerability }]</Card>
</Card>