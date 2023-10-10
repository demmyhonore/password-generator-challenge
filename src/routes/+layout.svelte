<slot />

<style>
	/* Font */
	@font-face {
		font-family: 'JetBrains Mono';
		src: url('/fonts/JetBrainsMono-VariableFont_wght.ttf') format('truetype');
		font-weight: 100 1000;
	}

	/* Variables */
	:global(:root) {
		--clr-almost-white: hsl(252, 11%, 91%);
		--clr-dark-grey: hsl(248, 10%, 15%);
		--clr-grey: hsl(251, 9%, 53%);
		--clr-neon-green: hsl(127, 100%, 82%);
		--clr-orange: hsl(13, 95%, 66%);
		--clr-red: hsl(0, 91%, 63%);
		--clr-very-dark-grey: hsl(248, 15%, 11%);
		--clr-yellow: hsl(42, 91%, 68%);
		--ff-base: 'JetBrains Mono', monospace;
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

	/* Global */
	:global(body) {
		height: 100vh;
		background-color: var(--clr-very-dark-grey);
		font-family: var(--ff-base);
		font-size: 1.125rem;
		color: var(--clr-almost-white);
		display: grid;
		place-items: center;
	}
</style>
