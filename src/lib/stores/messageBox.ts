import { writable } from 'svelte/store';

export const messageBoxOpen = writable(false);
export const statusMessage = writable<{
	type: 'success' | 'error';
	text: string;
} | null>(null);
