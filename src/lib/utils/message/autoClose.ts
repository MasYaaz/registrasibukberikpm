import { hideMessage } from './hideMessage';

export function autoClose() {
	setTimeout(() => {
		hideMessage();
	}, 600);
}
