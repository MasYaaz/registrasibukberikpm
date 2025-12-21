<script lang="ts">
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';

	export let code: string;
	export let color = '#5b2f03';

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		if (canvas) {
			try {
				await QRCode.toCanvas(canvas, code, {
					width: 200,
					margin: 1,
					color: { dark: color }
				});
			} catch (err) {
				console.error(err);
			}
		}
	});
</script>

<div class="mb-2 flex justify-center p-4">
	<canvas bind:this={canvas}></canvas>
</div>
