<slot />

<style>
	@font-face {
		font-family: 'JetBrains Mono';
		src: url('/fonts/JetBrainsMono-VariableFont_wght.ttf') format('truetype');
		font-weight: 100 1000;
	}

	/* Reset */
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(*) {
		margin: 0;
	}

	:global(body) {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	:global(img, picture, video, canvas, svg) {
		display: block;
		max-width: 100%;
	}

	:global(input, button, textarea, select) {
		font: inherit;
	}

	:global(p, h1, h2, h3, h4, h5, h6) {
		overflow-wrap: break-word;
	}

	/* Properties */
	:global(:root) {
		--clr-almost-white: hsl(252, 11%, 91%);
		--clr-dark-grey: hsl(248, 10%, 15%);
		--clr-grey: hsl(251, 9%, 53%);
		--clr-neon-green: hsl(127, 100%, 82%);
		--clr-orange: hsl(13, 95%, 66%);
		--clr-red: hsl(0, 91%, 63%);
		--clr-very-dark-grey: hsl(248, 15%, 11%);
		--clr-white: hsl(0, 0%, 100%);
		--clr-yellow: hsl(42, 91%, 68%);

		--ff-base: 'JetBrains Mono', monospace;

		--fs-base: 1.125rem;
		--fs-heading-medium: 1.5rem;
		--fs-heading-large: 2rem;

		--fw-base: 500;
		--fw-bold: 700;
		--fw-bolder: 800;
	}

	/* Global */
	:global(body) {
		height: 100vh;
		background-color: var(--clr-very-dark-grey);
		color: var(--clr-almost-white);
		font-family: var(--ff-base);
		font-size: var(--fs-base);
		font-weight: var(--fw-base);
	}

	:global(fieldset) {
		border: none;
		padding: 0;
	}
</style>
