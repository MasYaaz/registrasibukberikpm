import { statusMessage } from '$lib/stores/messageBox';
import { autoClose } from '../message/autoClose';

export async function showErrorWithDelay(errorText: string) {
	statusMessage.set({ type: 'error', text: errorText });
	autoClose();
}
