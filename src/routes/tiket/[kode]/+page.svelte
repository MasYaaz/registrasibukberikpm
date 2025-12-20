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

<div class="flex h-240 w-full flex-col items-center justify-end sm:max-w-lg">
	<img class="m-5 w-30" src={logo} alt="logo bukber ikpm" />
	<div
		class="flex h-[90%] w-full flex-col justify-around rounded-t-4xl bg-krem/80 p-5 sm:rounded-4xl sm:pb-0"
	>
		<div class="w-full text-center text-primary">
			<div class="mb-2 flex justify-center rounded-xl p-4 shadow-inner">
				<canvas bind:this={canvas}></canvas>
			</div>
			<h2 class="text-3xl font-bold uppercase">Kupon Makan</h2>
			<p class="font-medium">ID: {detail.kode_tiket}</p>
		</div>

		<div class="flex flex-col items-center justify-center text-lg text-primary">
			<div>
				<span>NAMA HADIRIN : </span>
				<strong>{detail.nama}</strong>
			</div>
			<div>
				<span>DOMISILI : </span>
				<strong>{detail.domisili}</strong>
			</div>
			<div>
				<span>JUMLAH PESERTA : </span>
				<strong>{detail.jumlah} Orang</strong>
			</div>
		</div>

		<div class="w-full text-center text-lg text-primary">
			<p>Terdaftar pada: {new Date(detail.created_at).toLocaleDateString('id-ID')}</p>
			<button>Cetak / Simpan PDF</button>
		</div>
	</div>
</div>
