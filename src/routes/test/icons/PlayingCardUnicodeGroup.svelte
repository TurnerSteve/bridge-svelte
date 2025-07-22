<script module lang="ts">
  export type ComponentProps = {
    size?: string;
  };
</script>

<script lang="ts">
  const { size = "2rem" } = $props();

  const SUIT_CARDS = {
    spades:   "🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂭🂮",
    hearts:   "🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂽🂾",
    diamonds: "🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃍🃎",
    clubs:    "🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃝🃞",
  };
</script>

<div>
  {#each Object.entries(SUIT_CARDS) as [suit, cards]}
    <div class="mb-2 flex items-center gap-2">
      <span style="font-size:{size};">{cards}</span>
      <span class="capitalize ml-2">{suit}</span>
    </div>
  {/each}
</div>