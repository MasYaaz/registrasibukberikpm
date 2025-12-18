<script lang="ts">
	import { Users } from 'lucide-svelte';
	let jumlahAnggota = ''; // Ini akan tetap berisi angka saja (misal: "3")

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;

		// 1. Ambil hanya angka 1 sampai 6
		// Jika user ketik 7-9 atau huruf, akan otomatis terhapus
		let val = target.value.replace(/[^1-6]/g, '');

		// 2. Jika user mencoba mengetik lebih dari 1 angka (misal: 12), ambil angka pertama saja
		if (val.length > 1) val = val[0];

		// 3. Update variabel dan tampilan input
		jumlahAnggota = val;
		target.value = val;
	}
</script>

<div
	class="w-full rounded-xl border-3 border-primary p-0.5 transition-all duration-600 md:w-[80%] dark:border-secondary"
>
	<div
		class="flex w-full items-center justify-between rounded-lg bg-primary p-1 font-medium text-secondary transition-all duration-600 md:p-2 dark:bg-secondary dark:text-primary"
	>
		<div class="flex w-[10%] justify-center">
			<Users class="h-4 w-4 md:h-6 md:w-6" />
		</div>

		<div class="relative flex w-[86%] items-center">
			<input
				name="noTelpon"
				type="text"
				inputmode="numeric"
				placeholder="Jumlah keluarga"
				value={jumlahAnggota}
				oninput={handleInput}
				class="w-full bg-transparent py-2 text-xs placeholder-secondary focus:ring-0 focus:outline-none md:text-sm lg:text-base dark:placeholder-primary"
			/>

			{#if jumlahAnggota}
				<span
					class="pointer-events-none absolute left-2 text-xs text-secondary transition-all duration-300 md:text-sm lg:text-base dark:text-primary"
				>
					&nbsp; Orang
				</span>
			{/if}
		</div>
	</div>
</div>
