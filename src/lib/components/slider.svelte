<script lang="ts">
	export let min: number = 0;
	export let max: number = 11;

	let value = 11;
	$: progress = (value / max) * 100;
	$: background = `linear-gradient(to right, var(--clr-neon-green) ${progress}%, var(--clr-very-dark-grey) ${progress}%)`;
</script>

<div>
	<label class="slider__label" for="character-length">
		<span>Character Length</span>
		<span class="slider__label__character-length">{value}</span>
	</label>
	<input
		class="slider__input"
		type="range"
		bind:value
		style:background
		id="character-length"
		name="character-length"
		{min}
		{max}
	/>
</div>

<style>
	input[type='range'] {
		/* Reset, then styling */
		-webkit-appearance: none;
		appearance: none;

		width: 100%;
		cursor: pointer;
		outline: none;
		height: 8px;
	}

	/* Webkit */
	input[type='range']::-webkit-slider-thumb {
		/* Reset, then styling */
		-webkit-appearance: none;
		appearance: none;

		height: 28px;
		width: 28px;
		background-color: var(--clr-almost-white);
		border-radius: 50%;
		border: none;
	}

	input[type='range']::-webkit-slider-thumb:hover {
		border: 2px solid var(--clr-neon-green);
		background-color: var(--clr-very-dark-grey);
	}

	/* Firefox */
	input[type='range']::-moz-range-thumb {
		height: 28px;
		width: 28px;
		background-color: var(--clr-almost-white);
		border-radius: 50%;
		border: none;
	}

	input[type='range']::-moz-range-thumb:hover {
		border: 2px solid var(--clr-neon-green);
		background-color: var(--clr-very-dark-grey);
	}

	.slider__label {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.slider__label__character-length {
		font-size: 1.75rem;
		font-weight: var(--fw-bold);
		color: var(--clr-neon-green);
	}

	.slider__input {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>
