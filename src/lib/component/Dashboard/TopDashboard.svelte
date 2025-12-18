<script>
	import LogoutButton from '$lib/component/Dashboard/LogoutButton.svelte';
	import { dataSantri } from '$lib/stores/dataSantri';
	import DownloadButton from './DownloadButton.svelte';
	import InfoCard from './InfoCard.svelte';
	import TitleCard from './TitleCard.svelte';
	$: totalSantri = $dataSantri.length;
	$: totalHadir = $dataSantri.filter((d) => d.kehadiran === true).length;
</script>

<div class="flex h-[30%] w-full flex-col items-center gap-6 md:justify-between xl:flex-row">
	<TitleCard />
	<div
		class="flex h-full w-full flex-col items-center justify-around gap-2 sm:flex-row md:gap-5 md:px-10 xl:justify-end"
	>
		<div class="flex gap-5">
			<InfoCard judul={totalSantri} txtTambahan="Santri - Santriwati" />
			<InfoCard judul={totalHadir} txtTambahan="Sudah Di Jemput" />
		</div>
		<div class="flex gap-5 sm:flex-col md:flex-row">
			<DownloadButton />
			<LogoutButton />
		</div>
	</div>
</div>
