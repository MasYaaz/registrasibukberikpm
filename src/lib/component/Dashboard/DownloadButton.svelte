<script>
	import { handleExportExcel } from '$lib/utils/exportExcel';
	import { filteredSantri } from '$lib/utils/filterData';
	import { Download } from 'lucide-svelte';
</script>

<button
	onclick={() => handleExportExcel($filteredSantri)}
	class="flex w-40 items-center justify-center gap-2 rounded-3xl bg-primary p-3 font-bold text-white uppercase duration-200 hover:cursor-pointer hover:bg-green md:flex-col md:gap-0 md:p-4 dark:bg-secondary dark:text-primary dark:hover:bg-white"
>
	<Download class="h-4 w-4 md:h-12 md:w-12" /> Download
</button>
