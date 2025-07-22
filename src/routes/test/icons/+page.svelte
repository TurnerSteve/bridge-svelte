<script lang="ts">
	import Icon from '@iconify/svelte';
	import PlayingCardUnicodeGroup from './PlayingCardUnicodeGroup.svelte';
</script>

MDI icons for cards:
<div class="flex space-x-4 text-2xl" style='align-items: center;'>
	1<Icon icon="mdi:cards-spade" />
	2<Icon icon="mdi:cards-heart" style="color: red; transform: scaleX(0.8)" />
	3<Icon icon="mdi:cards-diamond" style="color: red;" />
	4<Icon icon="mdi:cards-club" />
</div>

Bootstrap filled icons for cards:
<div class="flex space-x-4 text-2xl" style='align-items: center;'>
	1<Icon icon="bi:suit-spade-fill" />
	2<Icon icon="bi:suit-heart-fill" style="color: red; transform: scaleX(0.8)" />
	3<Icon icon="bi:suit-diamond-fill" style="color: red;" />
	4<Icon icon="bi:suit-club-fill" />
</div>

Bootstrap outline icons for cards:
<div class="flex space-x-4 text-2xl" style='align-items: center;'>
	1<Icon icon="bi:suit-spade" />
	2<Icon icon="bi:suit-heart" style="color: red; transform: scaleX(0.8)" />
	3<Icon icon="bi:suit-diamond" style="color: red;" />
	4<Icon icon="bi:suit-club" />
</div>

<div>Moon icons for suits:</div>
<div class="flex space-x-4 text-2xl" style='align-items: center;'>
	1 <Icon icon="icomoon-free:spades" />
	2 <Icon icon="icomoon-free:heart" style="color: red" />
	3 <Icon icon="icomoon-free:diamonds" style="color: red" />
	4 <Icon icon="icomoon-free:clubs" />
</div>

<div>Tabler icons for suits:</div>
<div class="flex space-x-4 text-2xl" style='align-items: center;'>
	1 <Icon icon="tabler:spade" />
	2 <Icon icon="tabler:heart" style="color: red" />
	3 <Icon icon="tabler:diamonds" style="color: red" />
	4 <Icon icon="tabler:clubs" />
</div>

<div>Game icons for suits:</div>
<div class="flex space-x-4 text-2xl" style='align-items: center;'>
	1 <Icon icon="game-icons:spades" />
	2 <Icon icon="game-icons:hearts" style="color: red" />
	3 <Icon icon="game-icons:diamonds" style="color: red" />
	4 <Icon icon="game-icons:clubs" />
</div>

Game icons
<div class="flex space-x-0 text-3xl">
	<Icon icon="game-icons:card-2-spades" />
	<Icon icon="game-icons:card-3-spades" />
	<Icon icon="game-icons:card-4-spades" />
	<Icon icon="game-icons:card-5-spades" />
	<Icon icon="game-icons:card-6-spades" />
	<Icon icon="game-icons:card-7-spades" />
	<Icon icon="game-icons:card-8-spades" />
	<Icon icon="game-icons:card-9-spades" />
	<Icon icon="game-icons:card-10-spades" />
	<Icon icon="game-icons:card-jack-spades" />
	<Icon icon="game-icons:card-queen-spades" />
	<Icon icon="game-icons:card-king-spades" />
	<Icon icon="game-icons:card-ace-spades" />
</div>
<div class="flex space-x-0 text-4xl" style="color: red ">
	<Icon icon="game-icons:card-2-hearts" />
	<Icon icon="game-icons:card-3-hearts" />
	<Icon icon="game-icons:card-4-hearts" />
	<Icon icon="game-icons:card-5-hearts" />
	<Icon icon="game-icons:card-6-hearts" />
	<Icon icon="game-icons:card-7-hearts" />
	<Icon icon="game-icons:card-8-hearts" />
	<Icon icon="game-icons:card-9-hearts" />
	<Icon icon="game-icons:card-10-hearts" />
	<Icon icon="game-icons:card-jack-hearts" />
	<Icon icon="game-icons:card-queen-hearts" />
	<Icon icon="game-icons:card-king-hearts" />
	<Icon icon="game-icons:card-ace-hearts" />
</div>
<div class="flex space-x-0 text-5xl" style="color: red ">
    <Icon icon="game-icons:card-ace-diamonds" />
	<Icon icon="game-icons:card-2-diamonds" />
	<Icon icon="game-icons:card-3-diamonds" />
	<Icon icon="game-icons:card-4-diamonds" />
	<Icon icon="game-icons:card-5-diamonds" />
	<Icon icon="game-icons:card-6-diamonds" />
	<Icon icon="game-icons:card-7-diamonds" />
	<Icon icon="game-icons:card-8-diamonds" />
	<Icon icon="game-icons:card-9-diamonds" />
	<Icon icon="game-icons:card-10-diamonds" />
	<Icon icon="game-icons:card-jack-diamonds" />
	<Icon icon="game-icons:card-queen-diamonds" />
	<Icon icon="game-icons:card-king-diamonds" />

</div>
<div class="flex space-x-0 text-6xl">
    <Icon icon="game-icons:card-ace-clubs" />
	<Icon icon="game-icons:card-2-clubs" />
	<Icon icon="game-icons:card-3-clubs" />
	<Icon icon="game-icons:card-4-clubs" />
	<Icon icon="game-icons:card-5-clubs" />
	<Icon icon="game-icons:card-6-clubs" />
	<Icon icon="game-icons:card-7-clubs" />
	<Icon icon="game-icons:card-8-clubs" />
	<Icon icon="game-icons:card-9-clubs" />
	<Icon icon="game-icons:card-10-clubs" />
	<Icon icon="game-icons:card-jack-clubs" />
	<Icon icon="game-icons:card-queen-clubs" />
	<Icon icon="game-icons:card-king-clubs" />
	<Icon icon="game-icons:card-ace-clubs" />
</div>
<div>Inverse example</div>
<div class="inverse-card-icon flex space-x-0">
	<Icon icon="game-icons:card-2-clubs" style="color: white;" width="48" height="48" />
	<Icon icon="game-icons:card-ace-hearts" style="color: white;" width="48" height="48" />
	<Icon icon="game-icons:card-king-diamonds" style="color: white;" width="48" height="48" />
	<Icon icon="game-icons:card-queen-spades" style="color: white;" width="48" height="48" />
</div>

<div>Unicode suits</div>

<span style="font-size:2.5rem;">1♠ 2♡ 3♢ 4♣ 🃏 1♤ 2♥ 3♦ 4♧ </span>

<div>Unicode playing cards</div>
<PlayingCardUnicodeGroup size="4rem" />

<style>
	.inverse-card-icon {
		background: black;
		border-radius: 6px;
		display: inline-block;
		padding: 0px;
	}
</style>
