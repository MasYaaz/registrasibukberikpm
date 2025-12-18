<script>
	// Import kedua asset
	import lightLogoAsset from '$lib/assets/light-theme.svg'; // Logo warna putih (untuk dark mode)
	import darkLogoAsset from '$lib/assets/dark-theme.svg'; // Logo warna hitam (untuk light mode)
	import InfoButton from './Navbar/InfoButton.svelte';
	import DarkmodeButton from './Navbar/DarkmodeButton.svelte';
</script>

<header class="fixed z-50 flex h-20 w-full justify-center pt-5">
	<nav
		class="flex h-fit w-[95%] justify-between rounded-full bg-primary p-2 px-8 shadow-lg/40 transition-all duration-600 md:px-12 lg:px-16 dark:bg-secondary"
	>
		<InfoButton />
		<div class="relative aspect-2/1 h-10 w-auto md:h-15 lg:h-20">
			<img
				src={darkLogoAsset}
				alt="logo light"
				class="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity
               duration-600 dark:opacity-0"
			/>

			<img
				src={lightLogoAsset}
				alt="logo dark"
				class="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity
               duration-600 dark:opacity-100"
			/>
		</div>
		<DarkmodeButton />
	</nav>
</header>
