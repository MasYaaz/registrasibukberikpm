<script lang="ts">
	import { LogIn, CircleOff } from 'lucide-svelte';
	export let disabled = false;
</script>

<button
	{disabled}
	class="group relative flex h-10 w-34 flex-row-reverse rounded-2xl bg-primary text-center text-xl font-semibold text-primary shadow-lg/20 shadow-secondary transition-all duration-600 md:h-14 md:w-42 dark:bg-secondary dark:text-secondary dark:shadow-black"
	type="submit"
>
	<div
		class:md:w-40={disabled}
		class:w-32={disabled}
		class="absolute top-1 left-1 z-10 flex h-8 w-2/6 items-center justify-center rounded-xl bg-secondary transition-all duration-600 hover:text-yellow-400 md:h-12 md:group-hover:w-40 dark:bg-primary dark:hover:text-green-500"
	>
		{#if disabled}
			<CircleOff strokeWidth="3" class="h-4 w-4 text-red-500" />
		{:else}
			<LogIn strokeWidth="3" class="h-4 w-4" />
		{/if}
	</div>
	<p
		class="flex h-full w-3/4 translate-x-5 items-center text-base text-secondary transition-all duration-600 md:translate-x-7 lg:text-lg dark:text-primary"
	>
		{#if disabled}{:else}
			Registrasi
		{/if}
	</p>
</button>
