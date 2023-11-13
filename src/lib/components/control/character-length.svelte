<script lang="ts">
	import { characterLengthStore } from '$lib/utils/stores';
	import { CHARACTER_MAXIMUM_LENGTH } from '$lib/utils/constants';

	const SLIDER_MINIMUM_LENGTH = 0;

	$: progress = ($characterLengthStore / CHARACTER_MAXIMUM_LENGTH) * 100;
	$: background = `linear-gradient(to right, var(--color-neonGreen) ${progress}%, var(--color-veryDarkGrey) ${progress}%)`;
</script>

<label for="slider" class="label">
	<span>Character length</span>
	<span class="label__value">{$characterLengthStore}</span>
</label>
<input
	id="slider"
	class="input"
	type="range"
	bind:value={$characterLengthStore}
	style:background
	min={SLIDER_MINIMUM_LENGTH}
	max={CHARACTER_MAXIMUM_LENGTH}
/>

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
		background-color: var(--color-almostWhite);
	}

	input[type='range']::-webkit-slider-thumb:hover {
		border: 2px solid var(--color-neonGreen);
		background-color: var(--color-veryDarkGrey);
	}

	input[type='range']::-moz-range-thumb {
		height: 28px;
		width: 28px;
		background-color: var(--color-almostWhite);
		border: none;
		border-radius: 50%;
	}

	input[type='range']::-moz-range-thumb:hover {
		border: 2px solid var(--color-neonGreen);
		background-color: var(--color-veryDarkGrey);
	}

	.input {
		margin-top: var(--spacing-base);
		margin-bottom: var(--spacing-base);
	}

	.label {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.label__value {
		font-size: var(--fontSize-medium);
		font-weight: var(--fontWeight-bold);
		color: var(--color-neonGreen);

		@media (min-width: 768px) {
			font-size: var(--fontSize-large);
		}
	}
</style>
