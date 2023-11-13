import { writable } from 'svelte/store';

import {
	CHARACTER_DEFAULT_ENABLED_OPTIONS,
	CHARACTER_DEFAULT_LENGTH,
	PASSWORD_PLACEHOLDER
} from '$lib/utils/constants';

export const characterEnabledOptionsStore = writable(CHARACTER_DEFAULT_ENABLED_OPTIONS);

export const characterLengthStore = writable(CHARACTER_DEFAULT_LENGTH);

export const passwordStore = writable(PASSWORD_PLACEHOLDER);
