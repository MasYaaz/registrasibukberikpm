<script lang="ts">
	import { Phone } from 'lucide-svelte'; // Saya sarankan ganti User ke Phone agar lebih relevan

	export let value = '';

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		// Filter: hanya angka.
		// Kita langsung update variabel 'phone'
		value = target.value.replace(/[^0-9]/g, '');

		// Sinkronisasi manual agar karakter huruf yang diketik langsung hilang dari tampilan input
		target.value = value;
	}
</script>

<div
	class="w-full rounded-xl border-3 border-primary p-0.5 transition-all duration-600 md:w-[80%] dark:border-secondary"
>
	<div
		class="flex w-full items-center justify-between rounded-lg bg-primary p-1 font-medium text-secondary transition-all duration-600 md:p-2 dark:bg-secondary dark:text-primary"
	>
		<div class="flex w-[10%] justify-center">
			<Phone class="h-4 w-4 md:h-6 md:w-6" />
		</div>

		<input
			title="Masukkan nomer WA yang bisa dihubungi."
			type="tel"
			name="noTelpon"
			bind:value
			oninput={handleInput}
			maxlength="15"
			inputmode="numeric"
			placeholder="Masukkan nomer WA yang bisa dihubungi"
			class="w-[89%] truncate py-2 text-xs placeholder-secondary transition-all duration-600 focus:ring-0 focus:outline-none md:text-sm lg:text-base dark:placeholder-primary"
		/>
	</div>
</div>
