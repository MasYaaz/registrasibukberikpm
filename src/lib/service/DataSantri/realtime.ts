import { dataSantri } from '$lib/stores/dataSantri';
import { supabase } from '$lib/supabase/supabaseClient';
import { writeCache } from './cache';
import type { RealtimeChannel } from '@supabase/supabase-js';

let initialized = false; // flag untuk cek apakah fungsi realtime udah dijalanin sebelumnya
let channel: RealtimeChannel | null = null; // variabel tempat supabase realtime berada biar bisa di nonaktifin

export function initSantriRealtime() {
	if (initialized) return;
	initialized = true;

	channel = supabase
		.channel('santri-changes')
		.on(
			'postgres_changes',
			{ event: 'UPDATE', schema: 'public', table: 'data_santri' },
			(payload) => {
				dataSantri.update((items) => {
					const updated = items.map((row) => (row.id === payload.new.id ? payload.new : row));

					writeCache(updated);
					return updated;
				});
			}
		)
		.subscribe();
}

export function stopSantriRealtime() {
	if (channel) {
		channel.unsubscribe();
		channel = null;
		initialized = false;
	}
}
