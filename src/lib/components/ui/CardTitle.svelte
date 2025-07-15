<script lang="ts">
  import { cn } from '$lib/utils/cn';
  export let classProp: string = '';
</script>

<div
  data-slot="card-title"
  class={cn("leading-none font-semibold", classProp)}
>
  <slot />
</div>