<script lang="ts">
	import lightLogoAsset from '$lib/assets/ikpm-light.svg';
	import darkLogoAsset from '$lib/assets/ikpm-dark.svg';
</script>

<div
	class="flex w-[70%] flex-col items-center gap-2 rounded-xl py-2 text-xs font-bold text-primary uppercase transition-all duration-600 md:w-[50%] md:py-3 lg:text-sm dark:text-secondary"
>
	<p>Supported by :</p>
	<div class="relative mr-2 aspect-2/1 h-10 w-auto md:h-15">
		<img
			src={lightLogoAsset}
			alt="logo light"
			class="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity
               duration-600 dark:opacity-0"
		/>
		<img
			src={darkLogoAsset}
			alt="logo dark"
			class="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity
               duration-600 dark:opacity-100"
		/>
	</div>
</div>
