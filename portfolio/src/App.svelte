<script>
	import Home from './components/Home.svelte';
	import { Route, Router, Link } from "svelte-routing";
</script>

<Router>
  <main class="app">
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <Route path="/" component={Home} />
  </main>
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family: "Roboto";
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>