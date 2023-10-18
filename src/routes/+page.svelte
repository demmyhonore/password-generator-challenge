<script lang="ts">
	import {
		OptionEnum,
		DEFAULT_PASSWORD,
		DEFAULT_PASSWORD_CHARS,
		PASSWORD_CHARS_MIN
	} from '$lib/constants';
	import type { OptionStateType } from '$lib/types';
	import CopyBlock from '$lib/components/copy-block.svelte';
	import SubmitButton from '$lib/components/submit-button.svelte';
	import OptionCheckbox from '$lib/components/option-checkbox.svelte';
	import OptionFeedback from '$lib/components/option-feedback.svelte';
	import OptionsBlock from '$lib/components/options-block.svelte';
	import OptionSlider from '$lib/components/option-slider.svelte';

	let password = DEFAULT_PASSWORD;
	let _passwordChars = DEFAULT_PASSWORD_CHARS;
	$: passwordChars = Math.max(_passwordChars, PASSWORD_CHARS_MIN);
	let passwordOptionState: OptionStateType = {
		[OptionEnum.Lowercase]: true,
		[OptionEnum.Uppercase]: false,
		[OptionEnum.Number]: false,
		[OptionEnum.Symbol]: false
	};
	$: hasOptionChecked = Object.values(passwordOptionState).some((option) => option === true);

	function handleSubmit() {
		hasOptionChecked ? generate(passwordChars, passwordOptionState) : reset();
	}

	function generate(chars: number, options: OptionStateType) {
		let input = '';
		let generated = '';

		const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
		const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const NUMBER = '0123456789';
		const SYMBOL = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

		if (options[OptionEnum.Lowercase]) input += LOWERCASE;
		if (options[OptionEnum.Uppercase]) input += UPPERCASE;
		if (options[OptionEnum.Number]) input += NUMBER;
		if (options[OptionEnum.Symbol]) input += SYMBOL;

		for (var i = 0; i < chars; i++) {
			generated += input.charAt(Math.floor(Math.random() * input.length));
		}

		password = generated;
	}

	function reset() {
		password = DEFAULT_PASSWORD;
	}
</script>

<main>
	<article class="pg">
		<h1 class="pg__heading">Password generator</h1>
		<CopyBlock {password} />
		<OptionsBlock onSubmit={handleSubmit}>
			<div slot="slider" class="pg__slider">
				<OptionSlider
					label="Character length"
					bind:value={_passwordChars}
					min={PASSWORD_CHARS_MIN}
					max={11}
				/>
			</div>
			<div slot="checkboxes">
				<div class="pg__checkbox">
					<OptionCheckbox
						id={OptionEnum.Lowercase}
						bind:checked={passwordOptionState[OptionEnum.Lowercase]}
						label="Include lowercase letters"
					/>
				</div>
				<div class="pg__checkbox">
					<OptionCheckbox
						id={OptionEnum.Uppercase}
						bind:checked={passwordOptionState[OptionEnum.Uppercase]}
						label="Include uppercase letters"
					/>
				</div>
				<div class="pg__checkbox">
					<OptionCheckbox
						id={OptionEnum.Number}
						bind:checked={passwordOptionState[OptionEnum.Number]}
						label="Include numbers"
					/>
				</div>
				<div class="pg__checkbox">
					<OptionCheckbox
						id={OptionEnum.Symbol}
						bind:checked={passwordOptionState[OptionEnum.Symbol]}
						label="Include symbols"
					/>
				</div>
			</div>
			<OptionFeedback slot="feedback" />
			<SubmitButton slot="generate" label="Generate" />
		</OptionsBlock>
	</article>
</main>

<style>
	main {
		width: 100%;
		display: grid;
		place-items: center;
		padding: 1rem;
	}

	.pg {
		max-width: 540px;
		width: 100%;
		display: grid;
		gap: 1rem;
	}

	.pg__checkbox {
		margin-bottom: 1rem;
	}

	.pg__heading {
		color: var(--clr-grey);
		font-size: var(--fs-base);
		text-align: center;

		@media (min-width: 376px) {
			font-weight: var(--fw-bold);
			font-size: var(--fs-heading-medium);
		}
	}
	.pg__slider {
		margin-bottom: 1.5rem;
	}
</style>
