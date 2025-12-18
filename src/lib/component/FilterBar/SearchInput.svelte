<script>
	import { Search } from 'lucide-svelte';
	import { filterSearch } from '../../utils/filterData';
</script>

<div
	class="flex w-full items-center justify-between rounded-xl bg-primary p-1 font-medium text-secondary transition-all duration-600 md:p-2 lg:w-[50%] dark:bg-secondary dark:text-primary"
>
	<Search class="w-[10%] p-1 md:w-[5%] " />
	<input
		autocomplete="off"
		name="search input"
		type="text"
		placeholder="Cari nama santri / santriwati"
		class="w-[95%] placeholder-secondary focus:ring-0 focus:outline-none dark:placeholder-primary"
		bind:value={$filterSearch}
	/>
</div>
