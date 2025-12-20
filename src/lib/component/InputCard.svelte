<script lang="ts">
	import { enhance } from '$app/forms';
	import Title from './Title.svelte';
	import SupportCard from './InputCard/SupportCard.svelte';
	import { handleEnhance } from '$lib/utils/login/handleEnhance';
	import InputNama from './InputCard/InputNama.svelte';
	import RegistrateButton from './InputCard/RegistrateButton.svelte';
	import InputNoTelpon from './InputCard/InputNoTelpon.svelte';
	import InputJumlahPeserta from './InputCard/InputJumlahPeserta.svelte';
	import InputDomisili from './InputCard/InputDomisili.svelte';
	import logo from '$lib/assets/logo.svg';

	let formData = {
		nama: '',
		noTelpon: '',
		jumlah: '',
		domisili: ''
	};

	$: isInvalid = Object.values(formData).some((val) => !val);
</script>

<section
	class="flex h-240 w-full max-w-2xl flex-col items-center justify-end sm:h-full sm:justify-center"
>
	<img class="m-5 w-30 sm:hidden" src={logo} alt="logo bukber ikpm" />
	<form
		autocomplete="off"
		method="POST"
		use:enhance={handleEnhance}
		class="flex h-[90%] w-full flex-col items-center justify-start gap-6 rounded-4xl bg-krem/80 px-6 backdrop-blur-[2px] transition-all duration-600 sm:h-full sm:justify-around sm:bg-secondary/0 sm:pb-0 sm:backdrop-blur-none md:gap-8 md:px-10 lg:gap-10 lg:px-16 lg:py-16"
	>
		<Title />
		<div class="flex w-full max-w-md flex-col items-center gap-4 sm:max-w-lg">
			<InputNama bind:value={formData.nama} />
			<InputNoTelpon bind:value={formData.noTelpon} />
			<div class="flex w-full flex-col gap-4 md:w-[80%] md:flex-row md:gap-2">
				<InputJumlahPeserta bind:value={formData.jumlah} />
				<InputDomisili bind:value={formData.domisili} />
			</div>
		</div>
		<RegistrateButton disabled={isInvalid} />
		<SupportCard />
	</form>
</section>
