<script lang="ts">
	import CopyButton from '$lib/components/copy-button.svelte';

	export let password: string;
</script>

<div class="copy-block">
	<p class="copy-block__password">{password}</p>
	<CopyButton />
</div>

<style>
	.copy-block {
		background-color: var(--clr-dark-grey);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.copy-block__password {
		font-size: var(--fs-heading-medium);
		font-weight: var(--fw-bold);
		line-height: 1.7;

		@media (min-width: 376px) {
			font-size: var(--fs-heading-large);
		}
	}
</style>
