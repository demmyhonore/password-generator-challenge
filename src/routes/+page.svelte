<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import CharacterLengthSlider from '$lib/components/character-length-slider.svelte';
	import Checkbox from '$lib/components/checkbox.svelte';
	import CopyButton from '$lib/components/copy-button.svelte';
	import StrengthStatus from '$lib/components/strength-status.svelte';

	let password: string = 'P4$5W0rD!';
</script>

<main class="container">
	<article class="password-generator">
		<h1 class="password-generator__heading">Password generator</h1>
		<div class="password-generator__copy">
			<p class="password-generator__copy__content">{password}</p>
			<CopyButton />
		</div>
		<form class="password-generator__controls">
			<fieldset>
				<legend class="visually-hidden">Choose your password options</legend>
				<div class="password-generator__controls__slider">
					<CharacterLengthSlider />
				</div>
				<div class="password-generator__controls__checkbox">
					<Checkbox id="uppercase" label="Include uppercase letters" checked={false} />
				</div>
				<div class="password-generator__controls__checkbox">
					<Checkbox id="lowercase" label="Include lowercase letters" checked={false} />
				</div>
				<div class="password-generator__controls__checkbox">
					<Checkbox id="numbers" label="Include numbers" checked={false} />
				</div>
				<div class="password-generator__controls__checkbox">
					<Checkbox id="symbols" label="Include symbols" checked={false} />
				</div>
			</fieldset>
			<StrengthStatus />
			<Button label="Generate" icon="arrow-right" />
		</form>
	</article>
</main>

<style>
	fieldset {
		border: none;
		padding: 0;
	}

	.container {
		max-width: 540px;
		width: 100%;
	}

	.password-generator {
		display: grid;
		gap: 1rem;
	}

	.password-generator__controls {
		background-color: var(--clr-dark-grey);
		padding: 1rem;
		display: grid;
		gap: 1rem;
	}

	.password-generator__controls__slider {
		margin-bottom: 1.5rem;
	}

	.password-generator__controls__checkbox {
		margin-bottom: 1rem;
	}

	.password-generator__copy {
		background-color: var(--clr-dark-grey);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.password-generator__copy__content {
		font-size: var(--fs-heading-medium);
		line-height: 1.7;
		font-weight: var(--fw-bold);

		@media (min-width: 376px) {
			font-size: var(--fs-heading-large);
		}
	}

	.password-generator__heading {
		color: var(--clr-grey);
		font-size: var(--fs-base);
		text-align: center;

		@media (min-width: 376px) {
			font-weight: var(--fw-bold);
			font-size: var(--fs-heading-medium);
		}
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
