<script lang="ts">
	export let label: string;
	export let value: string | number;
</script>

<div class="flex flex-col items-center">
	<span>{label} : </span>
	<strong class="text-center">{value}</strong>
</div>
