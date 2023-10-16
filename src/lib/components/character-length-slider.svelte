<script lang="ts">
	export let min: number = 0;
	export let max: number = 11;

	let current = 11;
	$: progress = (current / max) * 100;
	$: background = `linear-gradient(to right, var(--clr-neon-green) ${progress}%, var(--clr-very-dark-grey) ${progress}%)`;
</script>

<div>
	<label class="character-length-slider__label" for="character-length-slider">
		<span>Character length</span>
		<span class="character-length-slider__label__character-length">{current}</span>
	</label>
	<input
		class="character-length-slider__input"
		type="range"
		bind:value={current}
		style:background
		id="character-length-slider"
		name="character-length-slider"
		{min}
		{max}
	/>
</div>

<style>
	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 8px;
		cursor: pointer;
		outline: none;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		height: 28px;
		width: 28px;
		border: none;
		border-radius: 50%;
		background-color: var(--clr-almost-white);
	}

	input[type='range']::-webkit-slider-thumb:hover {
		border: 2px solid var(--clr-neon-green);
		background-color: var(--clr-very-dark-grey);
	}

	input[type='range']::-moz-range-thumb {
		height: 28px;
		width: 28px;
		background-color: var(--clr-almost-white);
		border: none;
		border-radius: 50%;
	}

	input[type='range']::-moz-range-thumb:hover {
		border: 2px solid var(--clr-neon-green);
		background-color: var(--clr-very-dark-grey);
	}

	.character-length-slider__label {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.character-length-slider__label__character-length {
		font-size: var(--fs-heading-medium);
		font-weight: var(--fw-bold);
		color: var(--clr-neon-green);

		@media (min-width: 376px) {
			font-size: var(--fs-heading-large);
		}
	}

	.character-length-slider__input {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>
