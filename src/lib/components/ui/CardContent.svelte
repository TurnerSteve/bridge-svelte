<script lang="ts">
  import { cn } from '$lib/utils/cn';
  const { classProp } = $props<{ classProp?: string }>();

</script>

<div
  data-slot="card-content"
  class={cn("px-6", classProp)}
>
      
  <slot />
</div>