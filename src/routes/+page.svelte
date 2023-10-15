<script lang="ts">
	import Checkbox from '$lib/components/checkbox.svelte';
	import CopyButton from '$lib/components/copy-button.svelte';
	import GenerateButton from '$lib/components/generate-button.svelte';
	import Slider from '$lib/components/slider.svelte';

	let password: string = 'P4$5W0rD!';
</script>

<main>
	<article class="password-generator">
		<h1 class="password-generator__heading">Password Generator</h1>
		<div class="password-generator__copy">
			<p class="password-generator__copy__content">{password}</p>
			<CopyButton />
		</div>
		<form class="password-generator__controls">
			<fieldset>
				<legend class="visually-hidden">Choose your password options</legend>
				<div class="password-generator__controls__slider">
					<Slider />
				</div>
				<div class="password-generator__controls__checkbox">
					<Checkbox id="uppercase" label="Include Uppercase Letters" checked={false} />
				</div>
				<div class="password-generator__controls__checkbox">
					<Checkbox id="lowercase" label="Include Lowercase Letters" checked={false} />
				</div>
				<div class="password-generator__controls__checkbox">
					<Checkbox id="numbers" label="Include Numbers" checked={false} />
				</div>
				<div class="password-generator__controls__checkbox">
					<Checkbox id="symbols" label="Include Symbols" checked={false} />
				</div>
			</fieldset>
			<div class="password-generator__controls__strength">
				<h2 class="password-generator__controls__strength__heading">Strength</h2>
				<span class="password-generator__controls__strength__status">
					<p class="password-generator__controls__strength__status__text">Medium</p>
					<span class="password-generator__controls__strength__status__meter">
						<span
							class="password-generator__controls__strength__status__meter__box"
							data-type="filled"
						/>
						<span
							class="password-generator__controls__strength__status__meter__box"
							data-type="filled"
						/>
						<span class="password-generator__controls__strength__status__meter__box" />
						<span class="password-generator__controls__strength__status__meter__box" />
					</span>
				</span>
			</div>
			<GenerateButton />
		</form>
	</article>
</main>

<style>
	.password-generator__controls__strength {
		background-color: var(--clr-very-dark-grey);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-transform: uppercase;
		font-weight: var(--fw-bold);
	}

	.password-generator__controls__strength__heading {
		font-size: 1rem;
		color: var(--clr-grey);
	}

	.password-generator__controls__strength__status {
		display: flex;
		align-items: center;
	}

	.password-generator__controls__strength__status__text {
		font-size: 1.125rem;
		margin-right: 1rem;
	}

	.password-generator__controls__strength__status__meter {
		display: flex;
		gap: 0.5rem;
	}

	.password-generator__controls__strength__status__meter__box {
		width: 10px;
		height: 28px;
		border: 2px solid var(--clr-almost-white);
	}

	.password-generator__controls__strength__status__meter__box[data-type='filled'] {
		border: 2px solid var(--clr-yellow);
		background-color: var(--clr-yellow);
	}

	fieldset {
		border: none;
		padding: 0;
	}

	.password-generator {
		max-width: 540;
		display: grid;
		gap: 1rem;
	}

	.password-generator__controls {
		background-color: var(--clr-dark-grey);
		padding: 1rem 2rem;
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
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.password-generator__copy__content {
		font-size: 1.5rem;
		line-height: 1.7;
		font-weight: var(--fw-bold);
	}

	.password-generator__heading {
		color: var(--clr-grey);
		font-size: 1.125rem;
		text-align: center;
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
