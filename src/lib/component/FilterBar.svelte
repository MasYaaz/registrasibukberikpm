<script lang="ts">
	import { filterPondok, filterKendaraan, pondokList, kendaraanList } from '../utils/filterData';
	import { onMount } from 'svelte';
	import FilterDropdown from './FilterBar/FilterDropdown.svelte';
	import SearchInput from './FilterBar/SearchInput.svelte';
	import { activeDropdown } from '../stores/dropDown';
	import { setupGlobalDropdownCloser } from '../utils/setupGlobalDropdownCloser';

	let cleanup: any;

	function toggleDropdown(name: string) {
		activeDropdown.update((curr) => (curr === name ? null : name));
	}

	onMount(() => {
		cleanup = setupGlobalDropdownCloser();
		return () => cleanup();
	});
</script>

<div
	class="z-20 mt-2 flex w-full flex-col justify-center gap-2 text-xs md:text-sm lg:flex-row lg:text-base"
>
	<div class="flex w-full justify-between gap-2 lg:w-[50%]">
		<FilterDropdown
			label="Pondok"
			items={$pondokList}
			value={$filterPondok}
			open={$activeDropdown === 'pondok'}
			toggle={() => toggleDropdown('pondok')}
			onSelect={(v) => {
				$filterPondok = v;
				toggleDropdown('pondok');
			}}
		/>

		<FilterDropdown
			label="Kendaraan"
			items={$kendaraanList}
			value={$filterKendaraan}
			open={$activeDropdown === 'kendaraan'}
			toggle={() => toggleDropdown('kendaraan')}
			onSelect={(v) => {
				$filterKendaraan = v;
				toggleDropdown('kendaraan');
			}}
		/>
	</div>

	<SearchInput />
</div>
