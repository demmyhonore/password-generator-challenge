<script lang="ts">
	import { characterEnabledOptionsStore } from '$lib/utils/stores';
	import { CharacterOptionEnum } from '$lib/utils/enum';

	import Checkbox from '$lib/components/checkbox.svelte';

	const characterOptions = [
		{
			name: CharacterOptionEnum.Lowercase,
			label: 'Include lowercase letters'
		},
		{
			name: CharacterOptionEnum.Uppercase,
			label: 'Include uppercase letters'
		},
		{
			name: CharacterOptionEnum.Number,
			label: 'Include numbers'
		},
		{
			name: CharacterOptionEnum.Symbol,
			label: 'Include symbols'
		}
	];

	function getIsCharacterOptionEnabled(passwordOption: CharacterOptionEnum) {
		return $characterEnabledOptionsStore.includes(passwordOption);
	}

	function enableCharacterOption(passwordOption: CharacterOptionEnum) {
		characterEnabledOptionsStore.update((options) => [...options, passwordOption]);
	}

	function disableCharacterOption(passwordOption: CharacterOptionEnum) {
		characterEnabledOptionsStore.update((options) =>
			options.filter((option) => option !== passwordOption)
		);
	}
</script>

{#each characterOptions as option}
	<Checkbox
		id={option.name}
		label={option.label}
		checked={getIsCharacterOptionEnabled(option.name)}
		onClick={() =>
			getIsCharacterOptionEnabled(option.name)
				? disableCharacterOption(option.name)
				: enableCharacterOption(option.name)}
	/>
{/each}
