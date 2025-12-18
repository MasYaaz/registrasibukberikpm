<script>
	import { filteredSantri } from '$lib/utils/filterData';
	import { sendWA } from '$lib/service/sendWA';
	import { CircleCheck, CircleX, Send } from 'lucide-svelte';
</script>

<div class="z-10 flex h-[70%] w-full flex-col gap-5">
	<div class=" w-full overflow-hidden rounded-2xl shadow-md/30">
		<table class="w-full table-fixed">
			<thead
				class=" bg-primary text-[8px] font-bold text-secondary uppercase transition-all duration-600 md:text-sm lg:text-base dark:bg-secondary dark:text-primary"
			>
				<tr class="h-8 text-center md:h-10 lg:h-12">
					<th class="w-[10%] max-w-10 py-1">No.</th>
					<th class="w-[45%] max-w-[200px] py-1">Nama</th>
					<th class="hidden w-[10%] max-w-20 truncate py-1 lg:table-cell">Kelas</th>
					<th class="hidden w-[15%] max-w-[150px] py-1 md:table-cell">Pondok</th>
					<th class="hidden w-[15%] max-w-[150px] py-1 md:table-cell">Kendaraan</th>
					<th class="hidden w-[20%] max-w-[150px] py-1 md:table-cell">Nama Penjemput</th>
					<th class="hidden w-[20%] max-w-[150px] py-1 md:table-cell">No.Telpon</th>
					<th class="w-[10%] max-w-[150px] py-1">Hadir</th>
					<th class="w-[10%] max-w-[50px] py-1"></th>
				</tr>
			</thead>
		</table>
		<div
			class="no-scrollbar max-h-[380px] w-full overflow-y-auto md:max-h-[420px] lg:max-h-[480px] xl:max-h-[600px]"
		>
			<table class="w-full table-fixed text-sm">
				<tbody class="bg-gray-100/60 text-xs font-semibold text-primary lg:text-base">
					{#if $filteredSantri.length === 0}
						<tr class="text-center text-sm">
							<td class="w-[10%] max-w-10 py-1"> - </td>
							<td class="w-[45%] max-w-[200px] truncate px-1 py-1">Hasil Tidak Ditemukan</td>
							<td class="hidden w-[10%] max-w-20 truncate py-1 md:table-cell"> - </td>
							<td class="w-[20%] max-w-[150px] truncate py-1"> - </td>
							<td class="w-[20%] max-w-[150px] truncate py-1"> - </td>
						</tr>
					{:else}
						{#each $filteredSantri as d, i}
							<tr class="text-center">
								<td class="w-[10%] max-w-10 py-2">{i + 1}</td>
								<td class="w-[45%] max-w-[200px] truncate px-1 py-2 text-left">{d.nama}</td>
								<td class="hidden w-[10%] max-w-20 truncate py-2 lg:table-cell">{d.kelas}</td>
								<td class="hidden w-[15%] max-w-[150px] truncate py-2 md:table-cell">{d.pondok}</td>
								<td class="hidden w-[15%] max-w-[150px] truncate py-2 md:table-cell"
									>{d.kendaraan}</td
								>
								<td class="hidden w-[20%] max-w-[150px] truncate py-2 md:table-cell">
									{#if d.nama_penjemput === null}
										Belum Mengisi
									{:else}
										{d.nama_penjemput}
									{/if}
								</td>
								<td class="hidden w-[20%] max-w-[150px] truncate py-2 md:table-cell"
									>{#if d.nomer_telpon === null}Belum Mengisi{:else}{d.nomer_telpon}{/if}</td
								>
								<td class="w-[10%] max-w-[150px] truncate py-2">
									{#if d.kehadiran === false}
										<CircleX class="w-full text-red-700" />
									{:else if d.kehadiran === true}
										<CircleCheck class="w-full text-green-600" />
									{/if}
								</td>
								<th class="w-[10%] max-w-[50px] py-2">
									<button
										title="Kirim No Telpon"
										onclick={() => sendWA(d)}
										class="transition-transform hover:scale-105 hover:text-green-600"
									>
										<Send />
									</button>
								</th>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</div>
