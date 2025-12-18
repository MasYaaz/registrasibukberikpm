<script>
	import FilterBar from '$lib/component/FilterBar.svelte';
	import TopDashboard from '$lib/component/Dashboard/TopDashboard.svelte';
	import TabelDataSantri from '$lib/component/Dashboard/TabelDataSantri.svelte';
</script>

<section class="flex h-full w-full flex-col gap-5">
	<TopDashboard />

	<div class="flex h-full w-full flex-col gap-2">
		<FilterBar />
		<TabelDataSantri />
	</div>
</section>
