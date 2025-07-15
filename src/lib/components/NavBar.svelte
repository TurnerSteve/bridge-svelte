<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<nav class="bg-blue-600 text-white">
  <div class="container mx-auto flex justify-between items-center py-4 px-2">
    <div class="text-lg font-bold tracking-wide flex items-center gap-2">
      <Icon icon="mdi:cards-playing" width="28" height="28" />
      Bridge Teacher
    </div>
    <ul class="flex gap-6 items-center">
      <li>
        <a href="/save-deals" class="flex flex-col items-center hover:text-black transition-colors duration-200" aria-label="Save Deals">
          <Icon icon="mdi:content-save" width="26" height="26" />
          <span class="text-xs mt-1">Save</span>
        </a>
      </li>
      <li>
        <a href="/single-deal" class="flex flex-col items-center hover:text-black transition-colors duration-200" aria-label="Single Deal">
          <Icon icon="mdi:diamond-stone" width="26" height="26" />
          <span class="text-xs mt-1">Single</span>
        </a>
      </li>
      <li>
        <a href="/multiple-deal" class="flex flex-col items-center hover:text-black transition-colors duration-200" aria-label="Multiple Deal">
          <Icon icon="mdi:layers" width="26" height="26" />
          <span class="text-xs mt-1">Multiple</span>
        </a>
      </li>
      <li>
        <a href="/settings" class="flex flex-col items-center hover:text-black transition-colors duration-200" aria-label="Settings">
          <Icon icon="mdi:cog" width="26" height="26" />
          <span class="text-xs mt-1">Settings</span>
        </a>
      </li>
      <li>
        <a href="/" class="flex flex-col items-center hover:text-black transition-colors duration-200" aria-label="Home">
          <Icon icon="mdi:home" width="26" height="26" />
          <span class="text-xs mt-1">Home</span>
        </a>
      </li>
    </ul>
  </div>
</nav>