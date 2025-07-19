<script lang="ts">
  import { toFullRank, toFullSuit } from './cardMapper';
  import CardImage from './CardImage.svelte';

  const { rank, suit } = $props<{ rank: string; suit: string }>();

</script>

<CardImage rank = {toFullRank(rank)} suit={toFullSuit(suit)} />