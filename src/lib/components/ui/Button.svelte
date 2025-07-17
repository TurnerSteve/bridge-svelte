<script lang="ts">
const { type, className } = $props<{
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}>();

const restProps = $restProps();

</script>

<button
  type={type}
  class={"px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none " + className}

  {@render default()} 

</button>

