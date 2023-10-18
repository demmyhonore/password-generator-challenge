import { OptionEnum } from '$lib/constants';

export type OptionStateType = {
	[OptionEnum.Lowercase]: boolean;
	[OptionEnum.Uppercase]: boolean;
	[OptionEnum.Number]: boolean;
	[OptionEnum.Symbol]: boolean;
};
