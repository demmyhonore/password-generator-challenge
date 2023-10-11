<script lang="ts">
	import CopyIcon from '../components/icons/copy.svelte';
	import IconButton from '../components/icon-button.svelte';

	let password: string = 'P4$5W0rD!';
</script>

<main>
	<article class="password-generator">
		<h1 class="password-generator__heading">Password Generator</h1>
		<div class="password-generator__copy">
			<p class="password-generator__copy__content">{password}</p>
			<IconButton label="Copy">
				<CopyIcon />
			</IconButton>
		</div>
		<form class="password-generator__controls">
			<fieldset>
				<legend class="visually-hidden">Choose your password options</legend>
				<div class="password-generator__controls__range">
					<label for="length">
						<span>Character Length</span>
						<span>10</span>
					</label>
					<input type="range" id="length" name="length" min="0" max="11" />
				</div>
				<div class="password-generator__controls__checkbox">
					<input type="checkbox" id="uppercase" name="uppercase" checked />
					<label for="uppercase">Include Uppercase Letters</label>
				</div>
				<div class="password-generator__controls__checkbox">
					<input type="checkbox" id="lowercase" name="lowercase" />
					<label for="lowercase">Include Lowercase Letters</label>
				</div>
				<div class="password-generator__controls__checkbox">
					<input type="checkbox" id="numbers" name="numbers" />
					<label for="numbers"> Include Numbers</label>
				</div>
				<div class="password-generator__controls__checkbox">
					<input type="checkbox" id="symbols" name="symbols" />
					<label for="symbols"> Include Symbols</label>
				</div>
			</fieldset>
			<p>Strength medium</p>
			<button>Generate</button>
		</form>
	</article>
</main>

<style>
	fieldset {
		border: none;
		padding: 0;
	}

	.password-generator {
		max-width: 540;
		display: grid;
		gap: 1rem;
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
		font-weight: 700;
	}

	.password-generator__heading {
		color: var(--clr-grey);
		font-size: 1.125rem;
		text-align: center;
	}

	.password-generator__controls {
		background-color: var(--clr-dark-grey);
		padding: 1.2rem 1.5rem;
	}

	.password-generator__controls__range > label {
		display: flex;
		align-items: center;
		justify-content: space-between;
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
