<script lang="ts">
	export let id: string;
	export let checked: boolean = false;
	export let label: string;
</script>

<div class="checkbox">
	<input type="checkbox" {id} bind:checked />
	<label for={id}>{label}</label>
</div>

<style>
	.checkbox {
		position: relative;
	}

	.checkbox label {
		display: block;
		padding-left: 40px;
	}

	.checkbox input {
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		opacity: 0;
	}

	.checkbox input + label::before {
		margin-top: 4px;
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		border: 2px solid var(--clr-almost-white);
		content: '';
	}

	.checkbox input + label::after {
		margin-top: 4px;
		position: absolute;
		top: 5px;
		left: 3px;
		height: 12px;
		width: 14px;
		background-image: url('data:image/svg+xml,<svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="%23000" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8" /></svg>');
		background-repeat: no-repeat;
		opacity: 0;
		content: '';
	}

	.checkbox input:checked + label::after {
		opacity: 1;
	}

	.checkbox input:checked + label::before {
		border: 2px solid var(--clr-neon-green);
		background-color: var(--clr-neon-green);
	}
</style>
