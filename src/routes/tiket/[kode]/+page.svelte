<script lang="ts">
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';
	import logo from '$lib/assets/logo.svg';

	export let data;
	const { detail } = data;

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		if (canvas) {
			try {
				// Kamu bisa isi dengan URL web atau hanya kode tiketnya
				// Contoh: window.location.href (untuk link lengkap)
				await QRCode.toCanvas(canvas, detail.kode_tiket, {
					width: 200,
					margin: 1,
					color: {
						dark: '#5b2f03' // Sesuaikan dengan warna text-primary kamu
					}
				});
			} catch (err) {
				console.error(err);
			}
		}
	});

	const handlePrint = () => {
		window.print();
	};
</script>

<div class="flex h-225 w-full flex-col items-center justify-end sm:max-w-lg">
	<img class="m-5 w-30" src={logo} alt="logo bukber ikpm" />
	<div
		class="flex h-[90%] w-full flex-col items-center justify-around rounded-t-4xl bg-krem/80 p-2 sm:rounded-4xl"
	>
		<div class="w-full text-center text-primary">
			<div class="mb-2 flex justify-center rounded-xl p-4 shadow-inner">
				<canvas bind:this={canvas}></canvas>
			</div>
			<h2 class="font-heading text-3xl uppercase">Kupon Makan</h2>
			<p class="font-heading">ID: {detail.kode_tiket}</p>
		</div>

		<div class="flex flex-col items-center justify-center gap-2 text-lg text-primary">
			<div class="flex flex-col items-center">
				<span>Atas Nama : </span>
				<strong>{detail.nama}</strong>
			</div>
			<div class="flex flex-col items-center">
				<span>Domisili : </span>
				<strong>{detail.domisili}</strong>
			</div>
			<div class="flex flex-col items-center">
				<span>Jumlah Peserta : </span>
				<strong>{detail.jumlah} Orang</strong>
			</div>
		</div>

		<span
			class="w-[80%] items-center text-center text-sm font-semibold text-primary italic sm:w-[60%]"
		>
			Mohon scan kupon ini untuk ditukarkan dengan Menu Berbuka sesuai dengan jumlah peserta. Terima
			Kasih..
			<p class="not-italic">🙏</p>
		</span>

		<div class="w-full text-center text-lg text-primary">
			<p>Terdaftar pada: {new Date(detail.created_at).toLocaleDateString('id-ID')}</p>
			<button
				class="font-semibold transition-transform duration-200 md:hover:scale-102 md:hover:cursor-pointer"
				onclick={handlePrint}>Cetak / Simpan PDF</button
			>
		</div>
	</div>
</div>
