<script lang="ts">
	import CopyBlock from '$lib/components/copy/block.svelte';
	import ControlBlock from '$lib/components/control/block.svelte';
</script>

<main>
	<article class="password-generator">
		<h1 class="password-generator__heading">Password generator</h1>
		<CopyBlock />
		<ControlBlock />
	</article>
</main>

<style>
	.password-generator {
		width: 100%;
		max-width: 540px;
		display: grid;
		gap: var(--spacing-large);
	}

	.password-generator__heading {
		color: var(--color-grey);
		font-size: var(--fontSize-base);
		text-align: center;

		@media (min-width: 768px) {
			font-weight: var(--fontWeight-bold);
			font-size: var(--fontSize-medium);
		}
	}
</style>
