<div class="block">
	<slot />
</div>

<style>
	.block {
		background-color: var(--color-darkGrey);
		padding: var(--spacing-base);
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (min-width: 768px) {
			padding: var(--spacing-base) var(--spacing-extraLarge);
		}
	}
</style>
