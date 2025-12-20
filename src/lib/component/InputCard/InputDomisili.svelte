<script lang="ts">
	import { MapPinHouse } from 'lucide-svelte';
	export let value = '';
</script>

<div
	class="w-full rounded-xl border-3 border-primary p-0.5 transition-all duration-600 md:w-[60%] dark:border-secondary"
>
	<div
		class="flex w-full items-center justify-between rounded-lg bg-primary p-1 font-medium text-secondary transition-all duration-600 md:p-2 dark:bg-secondary dark:text-primary"
	>
		<div class="flex w-[10%] justify-center md:w-[20%]">
			<MapPinHouse class="h-4 w-4 md:h-6 md:w-6" />
		</div>
		<input
			type="text"
			name="domisili"
			bind:value
			placeholder="Masukkan domisili anda"
			class="w-[89%] truncate py-2 text-xs placeholder-secondary transition-all duration-600 focus:ring-0 focus:outline-none md:w-[80%] md:text-sm lg:text-base dark:placeholder-primary"
		/>
	</div>
</div>
