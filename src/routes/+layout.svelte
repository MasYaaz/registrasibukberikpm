<script lang="ts">
	import './layout.css';
	import light from '$lib/assets/logo-light.svg';
	import dark from '$lib/assets/logo-dark.svg';
	import Navbar from '$lib/component/Navbar.svelte';
	import MessageBox from '$lib/component/MessageBox.svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={light} media="(prefers-color-scheme: light)" />
	<link rel="icon" type="image/svg+xml" href={dark} media="(prefers-color-scheme: dark)" />
	<title>Integrated Monitoring System</title>
</svelte:head>

<Navbar />
<MessageBox />
<main
	class="relative flex h-full min-h-screen w-full flex-col items-center justify-start gap-5 bg-secondary bg-[url('/src/images/foto-alakbar2.webp')] bg-cover px-6 pt-24 pb-10 transition-all duration-200 md:px-10 md:pt-30 lg:px-16 lg:pt-36 dark:bg-primary dark:bg-[url('/src/images/foto-alakbar1.webp')]"
>
	<div
		class="absolute inset-0 z-0 bg-linear-to-b from-secondary/10 via-secondary/70 to-secondary dark:from-primary/10 dark:via-primary/70 dark:to-primary"
	></div>
	{#key $page.url.pathname}
		<div in:fade={{ duration: 300 }} class="z-10 flex w-full flex-col items-center gap-5 lg:gap-8">
			{@render children()}
		</div>
	{/key}
</main>
