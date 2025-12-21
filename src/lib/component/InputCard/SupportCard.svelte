<script lang="ts">
	import lightLogoAsset from '$lib/assets/ikpm-light.svg';
</script>

<div
	class="flex flex-col items-center gap-2 rounded-xl py-2 text-sm font-bold text-primary uppercase"
>
	<p>Supported by :</p>
	<div class="relative mr-2 aspect-2/1 h-15 w-auto">
		<img
			src={lightLogoAsset}
			alt="logo light"
			class="absolute inset-0 h-full w-full object-contain"
		/>
	</div>
</div>
