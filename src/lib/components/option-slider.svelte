<script lang="ts">
	export let value = 11;
	export let min: number = 0;
	/* 
	Min is only used for feedback to the user.
	Custom input range css does not handle min well. 
	*/

	export let max: number;
	export let label: string;

	$: progress = (value / max) * 100;
	$: background = `linear-gradient(to right, var(--clr-neon-green) ${progress}%, var(--clr-very-dark-grey) ${progress}%)`;
</script>

<div>
	<label for="option-slider" class="option-slider__label">
		<span>{label}</span>
		<span class="option-slider__label__value">{Math.max(value, min)}</span>
	</label>
	<input
		id="option-slider"
		class="option-slider__input"
		type="range"
		bind:value
		style:background
		min={0}
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

	.option-slider__input {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.option-slider__label {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.option-slider__label__value {
		font-size: var(--fs-heading-medium);
		font-weight: var(--fw-bold);
		color: var(--clr-neon-green);

		@media (min-width: 376px) {
			font-size: var(--fs-heading-large);
		}
	}
</style>
