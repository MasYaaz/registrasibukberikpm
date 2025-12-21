<script lang="ts">
	import { fade } from 'svelte/transition';
	import { messageBoxOpen, statusMessage } from '../stores/messageBox';
	import { CircleCheck, CircleX } from 'lucide-svelte';
	import { hideMessage } from '$lib/utils/message/hideMessage';
</script>

{#if $messageBoxOpen}
	<button
		disabled={!$statusMessage}
		onclick={hideMessage}
		transition:fade={{ duration: 300 }}
		aria-label="Tutup notifikasi"
		role="dialog"
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
	>
		<div class="rounded-2xl border-3 border-secondary p-1">
			<div
				class="fade-in flex h-50 w-65 flex-col items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-6 shadow-xl transition-transform duration-300 md:h-60 md:w-80"
			>
				{#if !$statusMessage}
					<!-- Spinner saat belum ada pesan (Buat Loading) -->
					<div class="flex h-[70%] w-full items-center justify-center">
						<div
							class="h-18 w-18 animate-spin rounded-full border-8 border-blue-500 border-t-transparent"
						></div>
					</div>
					<p role="alert" class="flex h-[30%] items-center text-lg font-semibold text-gray-700">
						Sedang memproses...
					</p>
				{:else}
					<!-- Icon & pesan tergantung tipe -->
					{#if $statusMessage.type === 'success'}
						<CircleCheck class="h-[70%] w-auto p-2 text-green-600 md:p-4" />
					{:else}
						<CircleX class="h-[70%] w-auto p-2 text-5xl  text-red-600 md:p-4" />
					{/if}
					<p
						role="alert"
						class="flex h-[30%] items-center justify-center text-center text-lg font-semibold"
						class:text-green-600={$statusMessage.type === 'success'}
						class:text-red-500={$statusMessage.type === 'error'}
					>
						{$statusMessage.text}
					</p>
				{/if}
			</div>
		</div>
	</button>
{/if}
