<script lang="ts">
  import { cn } from '$lib/utils/cn';
 const { classProp } = $props<{ classProp?: string }>();
</script>

<div
  data-slot="card-title"
  class={cn("leading-none font-semibold", classProp)}
>
    <!-- @ts-expect-error Svelte 5 deprecated slot is still allowed -->
  <slot />
</div>