import { messageBoxOpen } from '$lib/stores/messageBox';

export async function loading() {
	messageBoxOpen.set(true);
}
