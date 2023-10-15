<script>
	import CopyIcon from '$lib/components/icons/copy.svelte';
</script>

<button>
	<CopyIcon />
	<span class="visually-hidden">Copy</span>
</button>

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

	svg {
		fill: currentColor;
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
