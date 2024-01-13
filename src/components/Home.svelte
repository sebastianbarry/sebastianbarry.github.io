<script>
	export let openOverlay;
	import { onMount } from "svelte";
	import { Link, link } from "svelte-routing";
	import { location } from "../stores/stores.js";
	import NameTitle from "./NameTitle.svelte";
	import DescriptionTitle from "./DescriptionTitle.svelte";
	import WorkSection from "./WorkSection.svelte";
	import ContactOverlay from "./ContactOverlay.svelte";
	import jsonData from "../resources/work.json";

	const workList = jsonData.worklist;

	onMount(() => {
		location.update((s) => "home");
	});
</script>

<section id="Home">
	<NameTitle />
	<DescriptionTitle />
	<div id="Links" class="rotate-box">
		<nav>
			<a href="#Work" class="nav__link">
				<span class="nav__link--text" data-splitting>Work</span>
				<span class="nav__link--text" data-splitting>Work</span>
			</a>
			<a href="/about" use:link replace class="nav__link">
				<span class="nav__link--text" data-splitting>About</span>
				<span class="nav__link--text" data-splitting>About</span>
			</a>
			<a on:click={openOverlay} class="nav__link">
				<span class="nav__link--text" data-splitting>Contact</span>
				<span class="nav__link--text" data-splitting>Contact</span>
			</a>
			<a
				href="/resources/Resume v4 - Sebastian Barry.pdf"
				target="_blank"
				class="nav__link"
			>
				<span class="nav__link--text" data-splitting>Resume</span>
				<span class="nav__link--text" data-splitting>Resume</span>
			</a>
		</nav>
	</div>
</section>

<hr id="Work" class="spacer" />
{#each workList as workItem, i}
	<WorkSection {workItem} {i} />
{/each}

<hr id="End" class="spacer" />

<style>
	#Links {
		max-height: 53vh;
	}

	.rotate-box {
		position: relative;
		animation: rotate 6s ease-in-out infinite;
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

	.spacer {
		color: transparent;
		width: 100%;
		height: 10vh;
		border: 0px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	a {
		text-decoration: none;
	}

	a:hover {
		outline: none;
		border: none;
	}

	.nav__link {
		font-size: 2.5rem;
		color: #fff;
		display: grid;
		font-style: italic;
		justify-content: center;
		margin: 2vh 0;
		cursor: pointer;
	}
	.nav__link--text {
		grid-area: 1/1;
		transition:
			opacity 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95),
			transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}
	.nav__link--text {
		white-space: nowrap;
	}
	.nav__link--text {
		display: inline-block;
		transform-origin: 50% 50% 0.4em;
		transition: transform 0.5s cubic-bezier(0.5, 0, 0, 1);
		transition-delay: calc(0ms + var(--char-index) * 25ms);
		backface-visibility: hidden;
		margin: 0 -0.02em;
	}
	.nav__link--text:nth-child(1) {
		font-family: "Playfair Display";
		color: aqua;
		font-weight: 500;
	}
	.nav__link--text:nth-child(2) {
		font-family: "Roboto";
		color: palevioletred;
		font-weight: 500;
		opacity: 0;
	}
	.nav__link--text:nth-child(2) {
		transform: rotate3d(1, -0.5, 0, 90deg);
	}
	.nav__link:hover .nav__link--text {
		transform: translateX(var(--link-translate-x));
	}
	.nav__link:hover .nav__link--text:nth-child(1) {
		opacity: 0;
	}
	.nav__link:hover .nav__link--text:nth-child(1) {
		transform: rotate3d(1, 0.3, 0, -90deg);
	}
	.nav__link:hover .nav__link--text:nth-child(2) {
		opacity: 1;
	}
	.nav__link:hover .nav__link--text:nth-child(2) {
		transform: rotate3d(0, 0, 0, 90deg);
	}
</style>
