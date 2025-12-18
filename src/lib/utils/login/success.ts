import { goto } from '$app/navigation';
import { statusMessage } from '$lib/stores/messageBox';
import { autoClose } from '../message/autoClose';

export async function showSuccessWithDelay(successText: string) {
	statusMessage.set({ type: 'success', text: successText });
	goto('/dashboard');
	autoClose();
}
