<script lang="ts">
	import { enhance } from '$app/forms';
	import Title from './Title.svelte';
	import SupportCard from './InputCard/SupportCard.svelte';
	import { handleEnhance } from '$lib/utils/login/handleEnhance';
	import InputNama from './InputCard/InputNama.svelte';
	import RegistrateButton from './InputCard/RegistrateButton.svelte';
	import InputNoTelpon from './InputCard/InputNoTelpon.svelte';
	import InputJumlahPeserta from './InputCard/InputJumlahPeserta.svelte';
</script>

<section class="flex h-[80%] w-full max-w-2xl flex-col items-center justify-center lg:flex-row">
	<form
		autocomplete="off"
		method="POST"
		use:enhance={handleEnhance}
		class="flex h-140 w-full flex-col items-center justify-around gap-6 rounded-3xl p-8 pt-12 transition-all duration-600 md:h-200 md:gap-8 lg:h-full lg:gap-10 lg:py-16"
	>
		<Title />
		<div class="flex w-full flex-col items-center gap-4">
			<InputNama />
			<InputNoTelpon />
			<InputJumlahPeserta />
		</div>
		<RegistrateButton />
		<SupportCard />
	</form>
</section>
