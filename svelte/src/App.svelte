<script>
  import { Route, Router, Link } from "svelte-routing";
  import NavBar from "./NavBar.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import Resume from "./components/Resume.svelte";
</script>

<Router>
  <main class="app">
    <header class="sticky-header">
      <NavBar />
    </header>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
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

  .sticky-header {
    position: fixed;
    font-family: "Open Sans", sans-serif;
    color: cyan;
    font-size: 1.8rem;
    top: -100px;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: top 0.3s ease-in-out;
  }

  .sticky-header.visible {
    top: 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
