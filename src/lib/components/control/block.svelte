<script lang="ts">
	import { characterEnabledOptionsStore, characterLengthStore } from '$lib/utils/stores';
	import { generatePassword, resetPassword } from '$lib/utils/utilities';

	import Block from '$lib/components/block.svelte';
	import CharacterLength from '$lib/components/control/character-length.svelte';
	import CharacterOptions from '$lib/components/control/character-options.svelte';
	import FeedbackSection from '$lib/components/control/feedback-section.svelte';
	import GenerateButton from '$lib/components/control/generate-button.svelte';

	const handleSubmit = () => {
		$characterEnabledOptionsStore.length > 0
			? generatePassword($characterLengthStore, $characterEnabledOptionsStore)
			: resetPassword();
	};
</script>

<Block>
	<form class="form" on:submit|preventDefault={handleSubmit}>
		<fieldset class="fieldset">
			<legend class="visually-hidden">Choose your password options</legend>
			<CharacterLength />
			<CharacterOptions />
		</fieldset>
		<FeedbackSection />
		<GenerateButton />
	</form>
</Block>

<style>
	.fieldset {
		display: grid;
		gap: var(--spacing-base);

		@media (min-width: 768px) {
			gap: var(--spacing-medium);
		}
	}

	.form {
		width: 100%;
		display: grid;
		gap: var(--spacing-extraLarge);

		@media (min-width: 768px) {
			margin-bottom: var(--spacing-medium);
		}
	}
</style>
