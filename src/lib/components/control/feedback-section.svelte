<script lang="ts">
	import { fade } from 'svelte/transition';

	import { characterEnabledOptionsStore, characterLengthStore } from '$lib/utils/stores';
	import { PasswordFeedbackEnum } from '$lib/utils/enum';

	$: feedbackScore = calculateFeedbackScore(
		$characterLengthStore,
		$characterEnabledOptionsStore.length
	);
	$: strength = mapFeedbackScoreToStrength(feedbackScore);

	function calculateFeedbackScore(characterLength: number, characterEnabledOptionsLength: number) {
		let score = 0;

		if (characterLength == 4) score -= 10;
		if (characterLength >= 8) score += 10;
		score += characterEnabledOptionsLength * 10;

		return score;
	}

	function mapFeedbackScoreToStrength(feedbackScore: number) {
		if (feedbackScore == 50) return PasswordFeedbackEnum.Strong;
		if (feedbackScore > 30) return PasswordFeedbackEnum.Medium;
		if (feedbackScore > 20) return PasswordFeedbackEnum.Weak;

		return PasswordFeedbackEnum.TooWeak;
	}
</script>

<section class="feedback">
	<h2 class="feedback__heading">Strength</h2>
	<span class="feedback__content">
		<p class="feedback__content__text">
			{#if strength === PasswordFeedbackEnum.TooWeak}
				Too weak!
			{:else if strength === PasswordFeedbackEnum.Weak}
				Weak
			{:else if strength === PasswordFeedbackEnum.Medium}
				Medium
			{:else}
				Strong
			{/if}
		</p>
		<span class="feedback__content__meter__container">
			{#key strength}
				<span
					class="feedback__content__meter"
					data-type={strength}
					transition:fade
					style="position:absolute"
				>
					{#if strength === PasswordFeedbackEnum.TooWeak}
						<span class="feedback__content__meter__box" data-type="too-weak" />
						<span class="feedback__content__meter__box" />
						<span class="feedback__content__meter__box" />
						<span class="feedback__content__meter__box" />
					{:else if strength === PasswordFeedbackEnum.Weak}
						<span class="feedback__content__meter__box" data-type="weak" />
						<span class="feedback__content__meter__box" data-type="weak" />
						<span class="feedback__content__meter__box" />
						<span class="feedback__content__meter__box" />
					{:else if strength === PasswordFeedbackEnum.Medium}
						<span class="feedback__content__meter__box" data-type="medium" />
						<span class="feedback__content__meter__box" data-type="medium" />
						<span class="feedback__content__meter__box" data-type="medium" />
						<span class="feedback__content__meter__box" />
					{:else}
						<span class="feedback__content__meter__box" data-type="strong" />
						<span class="feedback__content__meter__box" data-type="strong" />
						<span class="feedback__content__meter__box" data-type="strong" />
						<span class="feedback__content__meter__box" data-type="strong" />
					{/if}
				</span>
			{/key}
		</span>
	</span>
</section>

<style>
	.feedback {
		min-height: 68px;
		background-color: var(--color-veryDarkGrey);
		padding: var(--spacing-base);
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-transform: uppercase;
		font-weight: var(--fontWeight-bold);

		@media (min-width: 768px) {
			padding: var(--spacing-base) var(--spacing-extraLarge);
		}
	}

	.feedback__heading {
		font-size: var(--spacing-base);
		color: var(--color-grey);
	}

	.feedback__content {
		display: flex;
		align-items: center;
	}

	.feedback__content__text {
		margin-right: var(--spacing-base);
		font-weight: var(--fontWeight-extraBold);
		text-align: end;

		@media (min-width: 768px) {
			font-weight: var(--fontWeight-bold);
			font-size: var(--fontSize-medium);
		}
	}

	.feedback__content__meter {
		display: flex;
		gap: var(--spacing-extraSmall);
	}

	.feedback__content__meter__container {
		position: relative;
		width: 64px;
		height: 28px;
	}

	.feedback__content__meter__box {
		width: 10px;
		height: 28px;
		border: 2px solid var(--color-almostWhite);
	}

	.feedback__content__meter__box[data-type='too-weak'] {
		border: 2px solid var(--color-red);
		background-color: var(--color-red);
	}

	.feedback__content__meter__box[data-type='weak'] {
		border: 2px solid var(--color-orange);
		background-color: var(--color-orange);
	}

	.feedback__content__meter__box[data-type='medium'] {
		border: 2px solid var(--color-yellow);
		background-color: var(--color-yellow);
	}

	.feedback__content__meter__box[data-type='strong'] {
		border: 2px solid var(--color-neonGreen);
		background-color: var(--color-neonGreen);
	}
</style>
