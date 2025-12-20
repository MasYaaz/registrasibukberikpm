<script lang="ts">
	import './layout.css';
	import icon from '$lib/assets/logo.svg';
	import MessageBox from '$lib/component/MessageBox.svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={icon} />
	<title>Registrasi Bukber IKPM</title>
</svelte:head>

<MessageBox />
<main
	class="relative flex h-full min-h-screen w-full flex-col items-center justify-end bg-[url('/src/images/bg.webp')] bg-cover bg-center transition-all duration-200 sm:justify-center"
>
	<div class="absolute inset-0 z-0 bg-linear-to-b sm:from-krem/50 sm:via-krem/40 sm:to-krem"></div>
	{#key $page.url.pathname}
		<div in:fade={{ duration: 300 }} class="z-10 flex w-full flex-col items-center sm:py-5">
			{@render children()}
		</div>
	{/key}
</main>
