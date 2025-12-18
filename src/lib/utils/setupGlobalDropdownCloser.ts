import { activeDropdown } from '$lib/stores/dropDown';

export function setupGlobalDropdownCloser() {
	function closeAll() {
		activeDropdown.set(null);
	}

	function handleClick(event: MouseEvent) {
		if (!(event.target as HTMLElement).closest('.dropdown')) closeAll();
	}

	function handleScroll() {
		closeAll();
	}

	window.addEventListener('click', handleClick);
	window.addEventListener('scroll', handleScroll, { passive: true });

	return () => {
		window.removeEventListener('click', handleClick);
		window.removeEventListener('scroll', handleScroll);
	};
}
