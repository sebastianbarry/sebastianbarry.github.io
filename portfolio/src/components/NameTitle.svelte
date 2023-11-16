<script>
</script>

<div id="NameTitle" class="rotate-box">
	<div class="div__link" style="padding: 2vh">
		<p class="div__link--title gradient-title grow-text" style="margin: auto;">
			Sebastian Barry
		</p>
	</div>
</div>

<style>
	div {
		text-align: center;
		padding: 1em;
		min-width: 100%;
		margin: 0 auto;
	}

	p {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	.rotate-box {
		position: relative;
		/*display: inline-block;*/
		animation: rotate 5s ease-in-out infinite;
	}
	@keyframes rotate {
		0% {
			transform: rotate(-2deg);
		}
		50% {
			transform: rotate(2deg);
		}
		100% {
			transform: rotate(-2deg);
		}
	}
	.div__link {
		font-size: 5rem;
		color: #fff;
		display: grid;
		font-style: italic;
		justify-content: center;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		width: 100%;
	}
	.div__link--text {
		grid-area: 1/1;
		transition: opacity 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95),
			transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}
	.div__link--title {
		font-family: "Roboto";
		color: greenyellow;
		font-weight: 500;
	}
	.gradient-title {
		background: linear-gradient(
			to bottom,
			greenyellow,
			aqua,
			palevioletred,
			yellow
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.grow-text {
		animation: grow 8s ease-in-out infinite;
	}
	@keyframes grow {
		0% {
			font-size: 5.1rem;
			transform: scale(1);
			background-position: 0 0;
		}
		25% {
			background-position: 0 1em;
		}
		50% {
			font-size: 5.2rem;
			transform: scale(1.1);
			background-position: 0 0;
		}
		75% {
			background-position: 0 1em;
		}
		100% {
			font-size: 5.1rem;
			transform: scale(1);
			background-position: 0 0;
		}
	} /*# sourceMappingURL=global.css.map */
</style>
