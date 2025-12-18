<script>
	import { enhance } from '$app/forms';
	import { stopSantriRealtime } from '$lib/service/DataSantri/realtime';
	import { LogOut } from 'lucide-svelte';
</script>

<form
	class="flex h-full items-center"
	method="POST"
	onsubmit={() => stopSantriRealtime()}
	use:enhance
	action="/logout"
>
	<button
		type="submit"
		class="flex w-40 items-center justify-center gap-2 rounded-3xl bg-red-700 p-3 font-bold text-white uppercase duration-200 hover:cursor-pointer hover:bg-red-600 md:flex-col md:gap-0 md:p-4"
	>
		<LogOut class="h-4 w-4 md:h-12 md:w-12" />
		Logout
	</button>
</form>
