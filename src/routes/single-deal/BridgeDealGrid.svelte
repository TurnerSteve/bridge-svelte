<script module lang="ts">
export interface iProps {
	boardNo: number;
	algo: string;
	vulnerability: string;
	dealer: string;
	displayMode: any;
	northHand: any;
	southHand: any;
	eastHand: any;
	westHand: any;
}
</script>

<script lang="ts">
	// Get data props
	const {
		boardNo,
		algo,
		vulnerability,
		dealer,
		displayMode,
		northHand,
		southHand,
		eastHand,
		westHand
	} : iProps = $props();

	import HandRenderer from '$lib/components/renderers/HandRenderer.svelte';
	import { Direction } from '$lib/types/cards';
</script>

<div class="relative mx-auto w-full max-w-md">
	<!-- Corner Info Areas -->
	<div class="absolute top-0 left-0 z-10">
		<div class="text-xs text-gray-500">
			<div class="text-xs">Algorithm</div>
			<div class="text-lg font-bold">{algo}</div>
		</div>
	</div>
	<div class="absolute top-0 right-0 z-10">

	</div>
	<div class="absolute bottom-0 left-0 z-10">

	</div>
	<div class="absolute right-0 bottom-0 z-10">

	</div>

	<!-- Bridge Table Grid -->
	<div
		class="
      grid
      aspect-square
      min-h-[320px]
      w-full
      grid-cols-3
      grid-rows-3
      gap-2
    "
	>
		<!-- North -->
		<div class="col-start-2 row-start-1 flex items-center justify-center">
			<HandRenderer hand={northHand} {displayMode} direction={Direction.NORTH} />
		</div>
		<!-- West -->
		<div class="col-start-1 row-start-2 flex items-center justify-center">
			<HandRenderer hand={westHand} {displayMode} direction={Direction.WEST} />
		</div>
		<!-- Center -->
		<div class="col-start-2 row-start-2 flex items-center justify-center">
			<div class="text-center font-bold">
				<div >Board {boardNo}</div>
				<div >Vul: {vulnerability}</div>
				<div >Dealer: {dealer}</div>
			</div>
		</div>
		<!-- East -->
		<div class="col-start-3 row-start-2 flex items-center justify-center">
			<HandRenderer hand={eastHand} {displayMode} direction={Direction.EAST} />
		</div>
		<!-- South -->
		<div class="col-start-2 row-start-3 flex items-center justify-center">
			<HandRenderer hand={southHand} {displayMode} direction={Direction.SOUTH} />
		</div>
	</div>
</div>
