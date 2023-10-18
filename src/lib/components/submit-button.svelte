<script lang="ts">
	import ArrowRightIcon from '$lib/components/icons/arrow-right.svelte';

	export let label: string;
</script>

<button type="submit">
	{label}
	<ArrowRightIcon />
</button>

<style>
	button {
		cursor: pointer;
		border: 2px solid var(--clr-neon-green);
		background-color: var(--clr-neon-green);
		padding: 0.875rem 1.5rem;
		color: var(--clr-very-dark-grey);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 1.25rem;
		font-weight: var(--fw-bold);
		text-transform: uppercase;
	}

	button:hover,
	button:focus {
		background-color: var(--clr-very-dark-grey);
		color: var(--clr-neon-green);
	}
</style>
