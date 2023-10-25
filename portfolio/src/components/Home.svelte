<script>
import NameTitle from './NameTitle.svelte';
</script>

<section id="main__section">
	<NameTitle />
	<p>Software Developer</p>
	<ul>
		<li>Work</li>
		<li>About</li>
		<li>Contact</li>
		<li>Resume</li>
	</ul>
</section>

<style>
	section {
		text-align: center;
		padding: 1em;
		min-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>