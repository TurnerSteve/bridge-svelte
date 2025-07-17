<script lang="ts">
	const { variant, className } = $props<{
		variant?: 'outline' | 'default';
		className?: string;
	}>();
</script>

<span
	class={`inline-block rounded px-2 py-0.5 text-xs font-semibold
    ${
			variant === 'outline'
				? 'border border-gray-400 bg-white text-gray-700'
				: 'bg-blue-600 text-white'
		}
    ${className}
  `}
>
	<slot />
</span>
