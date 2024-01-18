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
		max-height: 25hv;
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
		animation: grow-big 8s ease-in-out infinite;
	}

	@keyframes grow-big {
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

	@keyframes grow-small {
		0% {
			font-size: 3.4rem;
			transform: scale(1);
			background-position: 0 0;
		}
		25% {
			background-position: 0 1em;
		}
		50% {
			font-size: 3.5rem;
			transform: scale(1.1);
			background-position: 0 0;
		}
		75% {
			background-position: 0 1em;
		}
		100% {
			font-size: 3.4rem;
			transform: scale(1);
			background-position: 0 0;
		}
	}

	@keyframes grow-smaller {
		0% {
			font-size: 2.4rem;
			transform: scale(1);
			background-position: 0 0;
		}
		25% {
			background-position: 0 1em;
		}
		50% {
			font-size: 2.5rem;
			transform: scale(1.1);
			background-position: 0 0;
		}
		75% {
			background-position: 0 1em;
		}
		100% {
			font-size: 2.4rem;
			transform: scale(1);
			background-position: 0 0;
		}
	}

	@media screen and (max-width: 1024px) {
		.grow-text {
			animation: grow-big 8s ease-in-out infinite;
		}
	}

	@media screen and (max-width: 950px) {
		.grow-text {
			animation: grow-big 8s ease-in-out infinite;
		}
	}

	@media screen and (max-width: 650px) {
		.grow-text {
			animation: grow-small 8s ease-in-out infinite;
		}
	}

	@media screen and (max-width: 480px) {
		.grow-text {
			animation: grow-smaller 8s ease-in-out infinite;
		}
	}
</style>
