<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let className = '';
</script>

<button
  type={type}
  class={"px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none " + className}
  {...$$restProps}
>
  <slot />
</button>