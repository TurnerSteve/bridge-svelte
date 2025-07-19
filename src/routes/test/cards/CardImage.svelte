<script module lang="ts">
	export type ComponentProps = {
		rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';
		suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
	};
</script>

<script lang="ts">
	const { rank, suit } = $props();

	const file = `/svg-cards/${rank}_of_${suit}.svg`;
</script>

<img src={file} alt={`${rank} of ${suit}`} width="100" height="145" />
