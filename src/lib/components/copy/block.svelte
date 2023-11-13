<script lang="ts">
	import { passwordStore } from '$lib/utils/stores';
	import { PASSWORD_PLACEHOLDER } from '$lib/utils/constants';

	import Block from '$lib/components/block.svelte';
	import Interaction from '$lib/components/copy/interaction.svelte';

	$: isGenerated = $passwordStore !== PASSWORD_PLACEHOLDER;
</script>

<Block>
	<p class="password" class:password--is-generated={isGenerated}>
		{$passwordStore}
	</p>
	<Interaction />
</Block>

<style>
	.password {
		color: var(--color-grey);
		font-size: var(--fontSize-medium);
		font-weight: var(--fontWeight-bold);

		@media (min-width: 768px) {
			font-size: var(--fontSize-large);
		}
	}

	.password--is-generated {
		color: var(--color-white);
	}
</style>
