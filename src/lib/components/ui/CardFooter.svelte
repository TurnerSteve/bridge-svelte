<script lang="ts">
  import { cn } from '$lib/utils/cn';
  export let classProp: string = '';
</script>

<div
  data-slot="card-footer"
  class={cn("flex items-center px-6 [.border-t]:pt-6", classProp)}
>
  <slot />
</div>