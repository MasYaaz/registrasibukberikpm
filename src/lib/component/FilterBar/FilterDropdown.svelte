<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { writable } from 'svelte/store';

	export let label: string;
	export let items: string[] = [];
	export let value: string;
	export let open: boolean;
	export let toggle: () => void;
	export let onSelect: (item: string) => void;

	// delay scroll
	const enableScroll = writable(false);

	// react to open state
	$: if (open) {
		setTimeout(() => enableScroll.set(true), 400);
	} else {
		enableScroll.set(false);
	}

	function select(item: string) {
		onSelect(item); // notify parent
	}
</script>

<div class="relative w-full">
	<button
		class="flex w-full cursor-pointer items-center justify-between rounded-xl bg-primary p-1 px-2 text-left font-medium text-secondary transition-all duration-600 md:p-2 md:px-5 dark:bg-secondary dark:text-primary"
		onclick={(e) => {
			e.stopPropagation();
			toggle();
		}}
	>
		{value || label}

		<span class="transition-transform duration-300" class:rotate-180={open}>
			<ChevronDown />
		</span>
	</button>

	<div
		class:max-h-0={!open}
		class:max-h-50={open}
		class="absolute left-0 z-10 mt-2.5 flex w-full flex-col overflow-hidden rounded-lg bg-primary font-semibold text-secondary shadow-lg transition-all duration-500 dark:bg-secondary dark:text-primary"
	>
		<div class="no-scrollbar flex w-full flex-col" class:overflow-y-auto={$enableScroll}>
			<button
				class="cursor-pointer py-2 hover:bg-green dark:hover:bg-gray-100"
				onclick={() => select('')}
			>
				Semua {label}
			</button>

			{#each items as item}
				<button
					class="cursor-pointer py-2 hover:bg-green dark:hover:bg-gray-100"
					onclick={() => select(item)}
				>
					{item}
				</button>
			{/each}
		</div>
	</div>
</div>
