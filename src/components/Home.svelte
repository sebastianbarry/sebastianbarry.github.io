<script>
	export let openOverlay;
	import { onMount } from "svelte";
	import { Link } from "svelte-routing";
	import { location } from "../stores/stores.js";
	import NameTitle from "./NameTitle.svelte";
	import DescriptionTitle from "./DescriptionTitle.svelte";
	import WorkSection from "./WorkSection.svelte";
	import ContactOverlay from "./ContactOverlay.svelte";
	import jsonData from "../../public/resources/work.json";

	const workList = jsonData.worklist;

	onMount(() => {
		location.update((s) => "home");
	});
</script>

<section id="Home">
	<NameTitle />
	<DescriptionTitle />
	<ul>
		<li><a href="#Work">Work</a></li>
		<li><Link to="/about">About</Link></li>
		<li><a on:click={openOverlay}>Contact</a></li>
		<li>
			<a href="/resources/Resume v4 - Sebastian Barry.pdf" target="_blank"
				>Resume</a
			>
		</li>
	</ul>
</section>

<hr id="Work" class="spacer" />
{#each workList as workItem, i}
	<WorkSection {workItem} {i} />
{/each}

<style>
	#Title {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.spacer {
		color: transparent;
		width: 100%;
		height: 9vh;
		border: 0px;
	}

	ul {
		list-style-type: none;
		display: contents;
	}

	li {
		padding: 1em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
