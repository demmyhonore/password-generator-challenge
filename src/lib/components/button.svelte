<script lang="ts">
	import ArrowRightIcon from '$lib/components/icons/arrow-right.svelte';

	type MaybeIcon = keyof typeof icons | null;
	const icons = {
		'arrow-right': ArrowRightIcon
	};

	export let label: string = 'Generate';
	export let icon: MaybeIcon = null;
</script>

<button>
	{label}
	<svelte:component this={icon ? icons[icon] : null} />
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
