<script lang="ts">
  import { cn } from '$lib/utils/cn';
  const { classProp } = $props<{ classProp?: string }>();
</script>

<div
  data-slot="card-description"
  class={cn("text-muted-foreground text-sm", classProp)}
>
      
  <slot />
</div>