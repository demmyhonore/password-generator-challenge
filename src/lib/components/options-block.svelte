<script lang="ts">
	export let onSubmit: () => void;
</script>

<form class="option-block" on:submit|preventDefault={onSubmit}>
	<fieldset>
		<legend class="visually-hidden">Choose your password options</legend>
		<slot name="slider" />
		<slot name="checkboxes" />
	</fieldset>
	<slot name="feedback" />
	<slot name="generate" />
</form>

<style>
	.option-block {
		background-color: var(--clr-dark-grey);
		padding: 1rem;
		display: grid;
		gap: 1rem;
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
