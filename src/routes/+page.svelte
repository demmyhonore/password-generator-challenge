<main>
	<article>
		<h1>Password Generator</h1>
		<div>
			<p>P4$5W0rD!</p>
			<button>Copy</button>
		</div>
		<form>
			<fieldset>
				<legend />
				<div>
					<label for="character-length">Character Length 10</label>
					<input type="range" id="character-length" name="character-length" min="0" max="11" />
				</div>
				<div>
					<input type="checkbox" id="include-uppercase" name="include-uppercase" checked />
					<label for="include-uppercase">Include Uppercase Letters</label>
				</div>

				<div>
					<input type="checkbox" id="include-lowercase" name="include-lowercase" />
					<label for="include-lowercase">Include Lowercase Letters</label>
				</div>
				<div>
					<input type="checkbox" id="include-numbers" name="include-numbers" />
					<label for="include-numbers"> Include Numbers</label>
				</div>
				<div>
					<input type="checkbox" id="include-symbols" name="include-symbols" />
					<label for="include-symbols"> Include Symbols</label>
				</div>
			</fieldset>
			<p>Strength medium</p>
			<button>Generate</button>
		</form>
	</article>
</main>
