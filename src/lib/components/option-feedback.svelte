<div class="password-generator__controls__strength">
	<h2 class="password-generator__controls__strength__heading">Strength</h2>
	<span class="password-generator__controls__strength__status">
		<p class="password-generator__controls__strength__status__text">Medium</p>
		<span class="password-generator__controls__strength__status__meter">
			<span class="password-generator__controls__strength__status__meter__box" data-type="filled" />
			<span class="password-generator__controls__strength__status__meter__box" data-type="filled" />
			<span class="password-generator__controls__strength__status__meter__box" />
			<span class="password-generator__controls__strength__status__meter__box" />
		</span>
	</span>
</div>

<style>
	.password-generator__controls__strength {
		background-color: var(--clr-very-dark-grey);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-transform: uppercase;
		font-weight: var(--fw-bold);
	}

	.password-generator__controls__strength__heading {
		font-size: 1rem;
		color: var(--clr-grey);
	}

	.password-generator__controls__strength__status {
		display: flex;
		align-items: center;
	}

	.password-generator__controls__strength__status__text {
		margin-right: 1rem;
		font-weight: var(--fw-bolder);

		@media (min-width: 376px) {
			font-weight: var(--fw-bold);
			font-size: var(--fs-heading-medium);
		}
	}

	.password-generator__controls__strength__status__meter {
		display: flex;
		gap: 0.5rem;
	}

	.password-generator__controls__strength__status__meter__box {
		width: 10px;
		height: 28px;
		border: 2px solid var(--clr-almost-white);
	}

	.password-generator__controls__strength__status__meter__box[data-type='filled'] {
		border: 2px solid var(--clr-yellow);
		background-color: var(--clr-yellow);
	}
</style>
