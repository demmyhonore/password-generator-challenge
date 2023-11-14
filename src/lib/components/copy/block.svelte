<script lang="ts">
	import { fade } from 'svelte/transition';

	import { passwordStore } from '$lib/utils/stores';
	import { PASSWORD_PLACEHOLDER } from '$lib/utils/constants';

	import Block from '$lib/components/block.svelte';
	import Interaction from '$lib/components/copy/interaction.svelte';

	$: isGenerated = $passwordStore !== PASSWORD_PLACEHOLDER;
</script>

<Block>
	<p class="password" class:password--is-generated={isGenerated}>
		{#key $passwordStore}
			<span transition:fade style="position:absolute">
				{$passwordStore}
			</span>
		{/key}
	</p>
	<Interaction />
</Block>

<style>
	.password {
		position: relative;
		width: 200px;
		min-height: 36px;
		color: var(--color-grey);
		font-size: var(--fontSize-medium);
		font-weight: var(--fontWeight-bold);

		@media (min-width: 768px) {
			width: 250px;
			min-height: 48px;
			font-size: var(--fontSize-large);
		}
	}

	.password--is-generated {
		color: var(--color-white);
	}
</style>
