<script>
	import ArrowRightIcon from '$lib/components/icons/arrow-right.svelte';
</script>

<button>
	Generate
	<ArrowRightIcon />
</button>

<style>
	button {
		cursor: pointer;
		border: 2px solid var(--clr-neon-green);
		background-color: var(--clr-neon-green);
		color: var(--clr-very-dark-grey);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 1.25rem;
		padding: 1rem 1.5rem;
		text-transform: uppercase;
		font-weight: var(--fw-bold);
	}

	button:hover,
	button:focus {
		background-color: var(--clr-very-dark-grey);
		color: var(--clr-neon-green);
	}
</style>
