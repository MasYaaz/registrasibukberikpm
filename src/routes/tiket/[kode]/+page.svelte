<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import TiketInfo from '$lib/component/Tiket/TiketInfo.svelte';
	import TiketQR from '$lib/component/Tiket/TiketQR.svelte';

	export let data;
	const { detail } = data;

	const handlePrint = () => {
		window.print();
	};
</script>

<div class="flex h-225 w-full flex-col items-center justify-end sm:max-w-lg sm:justify-center">
	<img class="m-5 mt-0 w-30" src={logo} alt="logo bukber ikpm" />
	<div
		class="flex h-[90%] w-full flex-col items-center justify-around rounded-t-[60px] bg-krem/80 p-2 sm:rounded-[60px] sm:p-5"
	>
		<div class="w-full text-center text-primary">
			<TiketQR code={detail.kode_tiket} />
			<h2 class="font-heading text-3xl uppercase">Kupon Makan</h2>
			<p class="font-heading">ID: {detail.kode_tiket}</p>
		</div>

		<div class="flex flex-col items-center justify-center gap-2 text-lg text-primary">
			<TiketInfo label="Atas Nama" value={detail.nama} />
			<TiketInfo label="Domisili" value={detail.domisili} />
			<TiketInfo label="Jumlah Peserta" value="{detail.jumlah} Orang" />
		</div>

		<span class="w-[80%] text-center text-sm font-semibold text-primary italic sm:w-[60%]">
			Mohon scan kupon ini untuk ditukarkan dengan Menu Berbuka sesuai dengan jumlah peserta. Terima
			Kasih..
			<p class="not-italic">🙏</p>
		</span>

		<div class="w-full text-center text-lg text-primary">
			<p class="text-sm opacity-80">
				Terdaftar pada: {new Date(detail.created_at).toLocaleDateString('id-ID')}
			</p>
			<button
				class="no-print mt-2 font-semibold underline transition-transform duration-200 md:hover:scale-105 md:hover:cursor-pointer"
				onclick={handlePrint}
			>
				Cetak / Simpan PDF
			</button>
		</div>
	</div>
</div>

<style>
	@media print {
		:global(body) {
			/* Memaksa background muncul */
			-webkit-print-color-adjust: exact !important;
			print-color-adjust: exact !important;
		}

		/* Menyembunyikan tombol cetak saat diprint */
		.no-print {
			display: none !important;
		}
	}
</style>
