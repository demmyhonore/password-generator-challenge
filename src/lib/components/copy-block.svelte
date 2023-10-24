<script lang="ts">
	import { DEFAULT_PASSWORD } from '$lib/constants';
	import CopyIcon from '$lib/components/icons/copy.svelte';

	export let password: string;
	$: isDefaultPassword = password === DEFAULT_PASSWORD;
	let copied = false;

	function copyToClipboard(password: string) {
		navigator.clipboard.writeText(password);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

<div class="copy-block">
	<p class="copy-block__password" class:copy-block__password--active={!isDefaultPassword}>
		{password}
	</p>
	<div class="copy-block__button">
		{#if copied}
			<p class="copy-block__button__copied">Copied!</p>
		{/if}
		<button on:click={() => copyToClipboard(password)}>
			<CopyIcon />
			<span class="visually-hidden">Copy</span>
		</button>
	</div>
</div>

<style>
	button {
		border: none;
		outline: none;
		background: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		color: var(--clr-neon-green);
	}

	button:hover {
		color: var(--clr-white);
	}

	.copy-block {
		background-color: var(--clr-dark-grey);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.copy-block__button {
		display: flex;
		align-items: right;
		gap: var(--s-base);
	}

	.copy-block__button__copied {
		text-transform: uppercase;
		font-size: var(--fs-base);
		color: var(--clr-neon-green);
	}

	.copy-block__password {
		color: var(--clr-grey);
		font-size: var(--fs-heading-medium);
		font-weight: var(--fw-bold);
		line-height: 1.7;

		@media (min-width: 376px) {
			font-size: var(--fs-heading-large);
		}
	}

	.copy-block__password--active {
		color: var(--clr-white);
	}

	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
</style>
