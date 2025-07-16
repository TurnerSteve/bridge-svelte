<script lang="ts">
  // No props needed: we use named slots!
</script>

<div class="relative w-full max-w-md mx-auto">
  <!-- Corner Info Areas -->
  <div class="absolute top-0 left-0 z-10">
    <slot name="infoTopLeft" />
  </div>
  <div class="absolute top-0 right-0 z-10">
    <slot name="infoTopRight" />
  </div>
  <div class="absolute bottom-0 left-0 z-10">
    <slot name="infoBottomLeft" />
  </div>
  <div class="absolute bottom-0 right-0 z-10">
    <slot name="infoBottomRight" />
  </div>
  <!-- Redeal Button -->
  <div class="absolute top-2 left-2 z-20">
    <slot name="redealButton" />
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
      <slot name="north" />
    </div>
    <!-- West -->
    <div class="col-start-1 row-start-2 flex justify-center items-center">
      <slot name="west" />
    </div>
    <!-- Center (Vulnerability & Dealer) -->
    <div class="col-start-2 row-start-2 flex justify-center items-center">
      <slot name="center" />
    </div>
    <!-- East -->
    <div class="col-start-3 row-start-2 flex justify-center items-center">
      <slot name="east" />
    </div>
    <!-- South -->
    <div class="col-start-2 row-start-3 flex justify-center items-center">
      <slot name="south" />
    </div>
  </div>
</div>