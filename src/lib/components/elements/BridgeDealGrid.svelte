

<script module lang="ts">
  export interface iProps {
    north: () => any;
    south: () => any;
    east: () => any;
    west: () => any;
    center: () => any;
    infoTopLeft: () => any;
    infoTopRight: () => any;
    infoBottomLeft: () => any;
    infoBottomRight: () => any;
    redealButton: () => any;
  }
</script>


<script lang="ts">
  // Runes: expect props as functions
  const { 
    north, south, east, west, center,
    infoTopLeft, infoTopRight, infoBottomLeft, infoBottomRight,
    redealButton
  } : iProps = $props();

</script>

<div class="relative w-full max-w-md mx-auto">
  <!-- Corner Info Areas -->
  <div class="absolute top-0 left-0 z-10">
   {@render infoTopLeft()}
  </div>
  <div class="absolute top-0 right-0 z-10">
    {@render infoTopRight()}
  </div>
  <div class="absolute bottom-0 left-0 z-10">
    {@render infoBottomLeft()}
  </div>
  <div class="absolute bottom-0 right-0 z-10">
    {@render infoBottomRight()}
  </div>
  <!-- Redeal Button -->
  <div class="absolute top-2 left-2 z-20">
    {@render redealButton()}
  </div>

  <!-- Bridge Table Grid -->
  <div
    class="
      grid 
      grid-cols-3 
      grid-rows-3 
      gap-2 
      w-full
      aspect-square
      min-h-[320px]
    "
  >
    <!-- North -->
    <div class="col-start-2 row-start-1 flex justify-center items-center">
      {@render north()}
    </div>
    <!-- West -->
    <div class="col-start-1 row-start-2 flex justify-center items-center">
       {@render west()}
    </div>
    <!-- Center (Vulnerability & Dealer) -->
    <div class="col-start-2 row-start-2 flex justify-center items-center">
       {@render center()}
    </div>
    <!-- East -->
    <div class="col-start-3 row-start-2 flex justify-center items-center">
       {@render east()}
    </div>
    <!-- South -->
    <div class="col-start-2 row-start-3 flex justify-center items-center">
             {@render south()}
    </div>
  </div>
</div>