<script>
	import { onMount } from "svelte";
	import { Link } from "svelte-routing";
	import { location } from "../stores/stores.js";
	import NameTitle from "./NameTitle.svelte";
	import WorkSection from "./WorkSection.svelte";
	import jsonData from "../../public/resources/work.json";

	const workList = jsonData.worklist;

	onMount(() => {
		location.update((s) => "home");
	});
</script>

<section id="Title">
	<NameTitle />
	<p>Software Developer</p>
	<ul>
		<li><a href="#work__top">Work</a></li>
		<li><Link to="/about">About</Link></li>
		<li>Contact</li>
		<li>
			<a href="/resources/Resume v4 - Sebastian Barry.pdf" target="_blank"
				>Resume</a
			>
		</li>
	</ul>
</section>

<a id="work__top" />
<hr />
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

	hr {
		color: transparent;
		width: 100%;
		height: 7vh;
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
