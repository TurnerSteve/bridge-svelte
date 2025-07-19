<script lang="ts">
  import { getTrayInfo, type LookupEntry } from '$lib/bridge/utils';
	import {Card, CardHeader } from '$lib/components/ui/card';

  const { boardId } = $props<{ boardId: number }>();
  const board = $derived(() : LookupEntry => getTrayInfo(boardId));

</script>

<Card class="w-full px-5">
  <CardHeader class="h-5">The Dealing Tray</CardHeader>
  <Card class="h-6 pl-4 justify-center">Board [{boardId}]</Card>
  <Card class="h-6 pl-5 justify-center">Dealer [{board()?.dealer }]</Card>
  <Card class="h-6 pl-4 justify-center">Vulnerable [{board()?.vulnerability }]</Card>
</Card>