<script>
	import { Lightbulb } from 'lucide-svelte';

	function go() {
		window.open('https://infosatgasikpm.netlify.app/', '_blank');
	}
</script>

<button
	onclick={go}
	aria-label="tombol darkmode"
	class="text-secondary dark:text-primary transition-all duration-300 hover:scale-110 hover:cursor-pointer 2xl:mb-1"
>
	<Lightbulb class="h-5 w-5 lg:h-8 lg:w-8" />
</button>
