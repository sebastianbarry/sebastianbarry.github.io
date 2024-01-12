<script>
  export let openOverlay;
  import { Route, Router, Link } from "svelte-routing";
  import { onMount } from "svelte";
  import { location } from "./stores/stores.js";

  let locationValue = "";
  let isSticky = false;
  let navbarClass = "";

  // Keep track of what route we are at
  location.subscribe((value) => {
    locationValue = value;
    update();
  });

  // Create the event listener for displaying the navbar when scrolling down on the Home route
  onMount(() => {
    window.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("scroll", update);
    };
  });

  // See whether the navbar should be displayed or not
  export function update() {
    if (locationValue == "about" || locationValue == "resume") {
      isSticky = true; // about page
    } else {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition >= 0.85 * window.innerHeight) {
        isSticky = true; // home page but scrolled down
      } else {
        isSticky = false; // home page not scrolled down
      }
    }
    navbarClass = isSticky ? "sticky" : "";
  }
</script>

<header class="sticky-header">
  <nav id="navbar" class={navbarClass}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <a on:click={openOverlay}>Contact</a>
    <a href="/resources/Resume v4 - Sebastian Barry.pdf" target="_blank"
      >Resume</a
    >
  </nav>
</header>

<style>
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

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0, 0, 0);
    padding: 10px;
    transition: all 0.3s ease-in-out; /* Add a smooth transition effect */
    transform: translateY(-100%);
    opacity: 0;
  }

  nav.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000; /* Adjust the z-index as needed */
    transform: translateY(0);
    opacity: 1;
  }

  nav.sticky-exit {
    transform: translateY(-100%);
    opacity: 0;
  }
</style>
