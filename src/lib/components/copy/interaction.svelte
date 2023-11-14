<script lang="ts">
	import { fade } from 'svelte/transition';

	import { passwordStore } from '$lib/utils/stores';
	import { copyToClipboard } from '$lib/utils/utilities';

	import CopyIcon from '$lib/components/copy/copy-icon.svelte';

	function handleCopy() {
		copyToClipboard($passwordStore);
		toggleFeedback();
	}

	let showFeedback = false;
	function toggleFeedback() {
		const milliseconds = 1000;
		showFeedback = true;

		setTimeout(() => {
			showFeedback = false;
		}, milliseconds);
	}
</script>

<div class="copy-action">
	{#if showFeedback}
		<p transition:fade={{ duration: 250 }} class="copy-action__feedback">Copied!</p>
	{/if}
	<button on:click={handleCopy}>
		<CopyIcon />
		<span class="visually-hidden">Copy</span>
	</button>
</div>

<style>
	button {
		border: none;
		outline: none;
		background: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		color: var(--color-neonGreen);
		transition: 0.3s;
	}

	button:hover {
		color: var(--color-white);
	}

	button:active {
		color: var(--color-neonGreen);
	}

	.copy-action {
		display: flex;
		align-items: right;
		gap: var(--spacing-base);
	}

	.copy-action__feedback {
		text-transform: uppercase;
		font-size: var(--fontSize-base);
		color: var(--color-neonGreen);
	}
</style>
