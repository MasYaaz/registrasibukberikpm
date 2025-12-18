import { writable } from 'svelte/store';

export const activeDropdown = writable<string | null>(null);
