
<script lang="ts">
  import NavBar from '$lib/components/NavBar.svelte';
  let { children } = $props();
</script>

<NavBar />

<main class="container mx-auto py-8 px-4">
    {@render children()}
</main>



