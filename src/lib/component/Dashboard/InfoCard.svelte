<script lang="ts">
	export let judul: number;
	export let txtTambahan: string;
</script>

<div class="flex h-full w-40 flex-col items-center justify-center md:w-fit">
	<div
		class="flex h-25 w-25 items-center justify-center rounded-3xl bg-primary p-3 text-center text-secondary shadow-md/50 transition-all duration-600 md:h-fit dark:bg-secondary dark:text-primary"
	>
		<h2 class="-mt-2 text-2xl font-black uppercase">
			{judul}
		</h2>
	</div>
	<div class="text-center">
		<h2 class="text-4xl font-black text-primary uppercase dark:text-secondary">Total</h2>
		<h2 class="-mt-1 text-[10px] font-black text-primary uppercase dark:text-secondary">
			{txtTambahan}
		</h2>
	</div>
</div>
