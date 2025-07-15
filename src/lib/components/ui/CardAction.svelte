<script lang="ts">
  import { cn } from '$lib/utils/cn';
  export let classProp: string = '';
</script>

<div
  data-slot="card-action"
  class={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", classProp)}
>
  <slot />
</div>