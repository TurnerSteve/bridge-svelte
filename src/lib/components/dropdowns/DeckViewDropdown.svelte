<script lang="ts">
  import DropdownSelect from '$lib/components/DropdownSelect.svelte';
  import { deckView, setDeckView } from '$lib/stores/deckView';
  import { DeckView } from '$lib/types/cards';

  const options = Object.values(DeckView).map(mode => ({
    label: mode,
    value: mode
  }));
</script>

<DropdownSelect
  {options}
  selected={$deckView}
  onchange={(e) => setDeckView(e.detail)}
  placeholder="Display cards as…"
/>