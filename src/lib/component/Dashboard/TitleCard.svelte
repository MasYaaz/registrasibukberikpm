<script>
	import { User } from 'lucide-svelte';
</script>

<div
	class="flex h-full items-center justify-center gap-4 rounded-4xl bg-primary p-5 shadow-lg/60 transition-all duration-600 dark:bg-secondary"
>
	<div
		class="rounded-3xl bg-secondary p-5 text-primary shadow-md/50 dark:bg-primary dark:text-secondary"
	>
		<User class="h-14 w-14 lg:h-18 lg:w-18" />
	</div>

	<div class="text-center">
		<h2 class="text-3xl font-black text-secondary uppercase 2xl:text-4xl dark:text-primary">
			Dashboard
		</h2>
		<h2 class="-mt-2 text-4xl font-black text-secondary uppercase 2xl:text-5xl dark:text-primary">
			Admin
		</h2>
	</div>
</div>
