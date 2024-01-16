<script>
</script>

<div id="NameTitle">
	<div class="rotate-box">
		<p class="rotate-box title gradient-title grow-text">Sebastian Barry</p>
	</div>
</div>

<style>
	#NameTitle {
		min-height: 20vh;
		padding: 8vh 0 0 0;
	}
	.rotate-box {
		position: relative;
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

	.title {
		overflow: hidden;
		font-size: 5rem;
		font-style: italic;
		color: #fff;
		text-transform: uppercase;
		width: auto;
		margin: 0;
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
	}

	@media screen and (max-width: 1024px) {
		.title {
			font-size: 1em;
		}
	}

	@media screen and (max-width: 950px) {
		.title {
			font-size: 0.8em;
		}
	}

	@media screen and (max-width: 650px) {
		.title {
			font-size: 0.6em;
		}
	}

	@media screen and (max-width: 480px) {
		.title {
			font-size: 0.5em;
		}
	}
</style>
