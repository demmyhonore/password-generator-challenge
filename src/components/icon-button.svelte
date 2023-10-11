<script lang="ts">
	export let label: string;
</script>

<button>
	<slot />
	<span class="visually-hidden">{label}</span>
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
