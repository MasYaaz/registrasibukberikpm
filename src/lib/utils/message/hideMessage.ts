import { messageBoxOpen, statusMessage } from '$lib/stores/messageBox';

export function hideMessage() {
	messageBoxOpen.set(false);
	statusMessage.set(null);
}
