<script lang="ts">
	import { IdCard } from 'lucide-svelte';
	export let value = '';
</script>

<div class="w-full rounded-xl border-3 border-primary p-0.5 transition-all duration-600 md:w-[80%]">
	<div
		class="flex w-full items-center justify-between rounded-lg bg-primary p-1 font-medium text-secondary transition-all duration-600 md:p-2"
	>
		<div class="flex w-[10%] justify-center">
			<IdCard class="h-4 w-4 md:h-6 md:w-6" />
		</div>
		<input
			title="Masukkan nama anda."
			type="text"
			name="nama"
			bind:value
			placeholder="Masukkan Nama Anda"
			class="w-[89%] truncate py-2 text-xs placeholder-secondary transition-all duration-600 focus:ring-0 focus:outline-none md:text-sm lg:text-base"
		/>
	</div>
</div>
