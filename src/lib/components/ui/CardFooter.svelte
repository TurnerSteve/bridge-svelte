<script lang="ts">
  import { cn } from '$lib/utils/cn';
  const { classProp } = $props<{ classProp?: string }>();
</script>

<div
  data-slot="card-footer"
  class={cn("flex items-center px-6 [.border-t]:pt-6", classProp)}
>
  
  <slot />
</div>