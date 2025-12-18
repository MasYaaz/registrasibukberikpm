<script>
	import { Moon, Sun } from 'lucide-svelte';
	import { isDark } from '../../stores/darkMode';
	import { get } from 'svelte/store';

	let dark = get(isDark);

	function toggleDark() {
		dark = !dark;
		isDark.set(dark);
	}
</script>

<button
	onclick={toggleDark}
	aria-label="tombol darkmode"
	class="text-secondary transition-all duration-300 hover:scale-110 hover:cursor-pointer 2xl:mb-1 dark:text-primary"
>
	{#if dark}
		<Moon class="h-5 w-5 lg:h-8 lg:w-8" />
	{:else}
		<Sun class="h-5 w-5 lg:h-8 lg:w-8" />
	{/if}
</button>
