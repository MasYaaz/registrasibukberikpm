<script lang="ts">
	import { page } from '$app/state'; // Jika menggunakan SvelteKit terbaru (Runes)
	import { Undo2 } from 'lucide-svelte';
</script>

<div
	class="flex h-225 w-full flex-col items-center justify-end sm:h-full sm:max-w-lg sm:justify-center"
>
	<div
		class="flex h-[90%] w-full flex-col items-center justify-center rounded-t-[60px] bg-krem/80 p-2 font-heading text-primary sm:max-w-xs sm:rounded-xl sm:p-5 sm:py-8"
	>
		<h1 class="text-7xl">{page.status}</h1>

		<p class="text-2xl">
			{page.error?.message || 'Waduh, ada yang salah!'}
		</p>

		<a href="/" class="mt-6 transition-transform lg:hover:scale-105">
			<Undo2 class=" h-12 w-12 font-light text-primary " />
		</a>
	</div>
</div>
