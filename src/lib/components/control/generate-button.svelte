<script lang="ts">
	import ArrowRightIcon from '$lib/components/control/arrow-right-icon.svelte';
</script>

<button type="submit">
	Generate
	<ArrowRightIcon />
</button>

<style>
	button {
		cursor: pointer;
		border: 2px solid var(--color-neonGreen);
		background-color: var(--color-neonGreen);
		padding: var(--spacing-small) var(--spacing-large);
		color: var(--color-veryDarkGrey);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: var(--spacing-medium);
		font-weight: var(--fontWeight-bold);
		text-transform: uppercase;
	}

	button:hover {
		background-color: var(--color-veryDarkGrey);
		color: var(--color-neonGreen);
	}
</style>
