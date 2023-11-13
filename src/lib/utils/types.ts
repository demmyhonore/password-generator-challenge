import type { CharacterOptionEnum } from '$lib/utils/enum';

export type CharacterOptionType =
	| CharacterOptionEnum.Lowercase
	| CharacterOptionEnum.Uppercase
	| CharacterOptionEnum.Number
	| CharacterOptionEnum.Symbol;

export type CharacterEnabledOptionsType = CharacterOptionType[];
