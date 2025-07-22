<script lang="ts">
  import NumberStepper from '$lib/components/selectors/NumberStepper.svelte';
  let current = $state(5) ;

  function onChange(newVal: number) {
    current = newVal;
  }
</script>

<NumberStepper
  value={current}
  min={0}
  max={13}
  onchange={onChange}
/>

<p>Selected: {current}</p>