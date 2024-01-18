<script>
  import { Route, Router, Link } from "svelte-routing";
  import NavBar from "./NavBar.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import Resume from "./components/Resume.svelte";
  import ContactOverlay from "./components/ContactOverlay.svelte";
  import BottomIcons from "./BottomIcons.svelte";

  // overlay stuff
  let overlayVisible = false;
  function openOverlay() {
    overlayVisible = true;
  }
  function closeOverlay() {
    overlayVisible = false;
  }
</script>

<Router>
  <main>
    <NavBar {openOverlay} />
    <div id="fade-bar"></div>
    <Route path="/">
      <Home {openOverlay} />
    </Route>
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
    <ContactOverlay bind:show={overlayVisible} on:close={closeOverlay} />
    <BottomIcons />
  </main>
</Router>

<style>
  main {
    text-align: center;
    font-family: "Roboto";
  }

  #fade-bar {
    height: 10px;
    background-image: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgba(0, 0, 0, 0)
    );
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
