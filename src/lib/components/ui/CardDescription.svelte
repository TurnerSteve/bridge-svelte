<script lang="ts">
  import { cn } from '$lib/utils/cn';
  export let classProp: string = '';
</script>

<div
  data-slot="card-description"
  class={cn("text-muted-foreground text-sm", classProp)}
>
  <slot />
</div>