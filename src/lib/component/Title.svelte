<script>
	import { Users } from 'lucide-svelte';
</script>

<div class="flex h-[20%] w-full flex-col items-center justify-center gap-2">
	<div
		class="rounded-3xl bg-primary p-5 text-secondary shadow-md/50 transition-all duration-600 dark:bg-secondary dark:text-primary"
	>
		<Users class="h-10 w-10 lg:h-15 lg:w-15" />
	</div>

	<div class="text-center">
		<h2
			class="text-3xl font-black text-primary uppercase transition-all duration-600 lg:text-5xl dark:text-secondary"
		>
			Login
		</h2>
		<h2
			class="text-lg font-bold text-primary uppercase transition-all duration-600 md:text-xl lg:text-2xl dark:text-secondary"
		>
			Admin
		</h2>
	</div>
</div>
