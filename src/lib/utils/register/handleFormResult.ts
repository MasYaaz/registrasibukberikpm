import { showSuccessWithDelay } from './success';
import { showErrorWithDelay } from './error';

export async function handleFormResult(result: any) {
	await new Promise((r) => setTimeout(r, 600));
	if (result.type === 'success') {
		await showSuccessWithDelay(result.data.success, result.data.kodeTiket);
	} else if (result.type === 'failure') {
		await showErrorWithDelay(result.data.error);
	}
}
