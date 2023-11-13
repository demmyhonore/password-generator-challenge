import { PASSWORD_PLACEHOLDER } from '$lib/utils/constants';
import { CharacterOptionEnum } from '$lib/utils/enum';
import { passwordStore } from '$lib/utils/stores';
import type { CharacterEnabledOptionsType } from '$lib/utils/types';

export function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text);
}

export function generatePassword(
	characterLength: number,
	characterEnabledOptions: CharacterEnabledOptionsType
) {
	let input = '';
	let output = '';

	const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
	const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const NUMBER = '0123456789';
	const SYMBOL = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

	if (characterEnabledOptions.includes(CharacterOptionEnum.Lowercase)) input += LOWERCASE;
	if (characterEnabledOptions.includes(CharacterOptionEnum.Uppercase)) input += UPPERCASE;
	if (characterEnabledOptions.includes(CharacterOptionEnum.Number)) input += NUMBER;
	if (characterEnabledOptions.includes(CharacterOptionEnum.Symbol)) input += SYMBOL;

	for (let i = 0; i < characterLength; i++) {
		output += input.charAt(Math.floor(Math.random() * input.length));
	}

	passwordStore.set(output);
}

export function resetPassword() {
	passwordStore.set(PASSWORD_PLACEHOLDER);
}
