<script lang="ts">
	import { FeedbackEnum } from '$lib/constants';

	export let passwordChars: number;
	export let optionCheckedCount: number;

	$: optionFeedbackScore = getOptionFeedbackScore(passwordChars, optionCheckedCount);
	$: optionFeedback = getOptionFeedback(optionFeedbackScore);

	function getOptionFeedback(feedbackScore: number) {
		if (feedbackScore === 50) return FeedbackEnum.Strong;
		if (feedbackScore > 30) return FeedbackEnum.Medium;
		if (feedbackScore > 20) return FeedbackEnum.Weak;

		return FeedbackEnum.TooWeak;
	}

	function getOptionFeedbackScore(passwordChars: number, optionCheckedCount: number) {
		let score = 0;

		if (passwordChars === 4) score -= 10;
		if (passwordChars >= 8) score += 10;
		score += optionCheckedCount * 10;

		return score;
	}
</script>

<div class="option-feedback">
	<h2 class="option-feedback__heading">Strength</h2>
	<span class="option-feedback__content">
		<p class="option-feedback__content__text">
			{#if optionFeedback === FeedbackEnum.TooWeak}
				Too weak!
			{:else if optionFeedback === FeedbackEnum.Weak}
				Weak
			{:else if optionFeedback === FeedbackEnum.Medium}
				Medium
			{:else}
				Strong
			{/if}
		</p>
		<span class="option-feedback__content__meter" data-type={optionFeedback}>
			{#if optionFeedback === FeedbackEnum.TooWeak}
				<span class="option-feedback__content__meter__box" data-type="too-weak" />
				<span class="option-feedback__content__meter__box" />
				<span class="option-feedback__content__meter__box" />
				<span class="option-feedback__content__meter__box" />
			{:else if optionFeedback === FeedbackEnum.Weak}
				<span class="option-feedback__content__meter__box" data-type="weak" />
				<span class="option-feedback__content__meter__box" data-type="weak" />
				<span class="option-feedback__content__meter__box" />
				<span class="option-feedback__content__meter__box" />
			{:else if optionFeedback === FeedbackEnum.Medium}
				<span class="option-feedback__content__meter__box" data-type="medium" />
				<span class="option-feedback__content__meter__box" data-type="medium" />
				<span class="option-feedback__content__meter__box" data-type="medium" />
				<span class="option-feedback__content__meter__box" />
			{:else}
				<span class="option-feedback__content__meter__box" data-type="strong" />
				<span class="option-feedback__content__meter__box" data-type="strong" />
				<span class="option-feedback__content__meter__box" data-type="strong" />
				<span class="option-feedback__content__meter__box" data-type="strong" />
			{/if}
		</span>
	</span>
</div>

<style>
	.option-feedback {
		background-color: var(--clr-very-dark-grey);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-transform: uppercase;
		font-weight: var(--fw-bold);
	}

	.option-feedback__heading {
		font-size: 1rem;
		color: var(--clr-grey);
	}

	.option-feedback__content {
		display: flex;
		align-items: center;
	}

	.option-feedback__content__text {
		margin-right: 1rem;
		font-weight: var(--fw-bolder);
		text-align: end;

		@media (min-width: 376px) {
			font-weight: var(--fw-bold);
			font-size: var(--fs-heading-medium);
		}
	}

	.option-feedback__content__meter {
		display: flex;
		gap: 0.5rem;
	}

	.option-feedback__content__meter__box {
		width: 10px;
		height: 28px;
		border: 2px solid var(--clr-almost-white);
	}

	.option-feedback__content__meter__box[data-type='too-weak'] {
		border: 2px solid var(--clr-red);
		background-color: var(--clr-red);
	}

	.option-feedback__content__meter__box[data-type='weak'] {
		border: 2px solid var(--clr-orange);
		background-color: var(--clr-orange);
	}

	.option-feedback__content__meter__box[data-type='medium'] {
		border: 2px solid var(--clr-yellow);
		background-color: var(--clr-yellow);
	}

	.option-feedback__content__meter__box[data-type='strong'] {
		border: 2px solid var(--clr-neon-green);
		background-color: var(--clr-neon-green);
	}
</style>
