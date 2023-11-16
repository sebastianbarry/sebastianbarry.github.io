<script>
  import { Route, Router, Link } from "svelte-routing";
  import { onMount } from "svelte";

  // Script for sticky navbar
  let isSticky = false;
  let navbarClass = "";

  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    isSticky = scrollPosition >= 0.8 * window.innerHeight;
    navbarClass = isSticky ? "sticky" : "";
  }
  // end script for sticky navbar
</script>

<nav id="navbar" class={navbarClass}>
  <Link to="/">Home</Link>
  <Link to="/">About</Link>
  <Link to="/">Contact</Link>
  <!-- <Link to="/resume">Resume</Link> -->
  <a href="/resources/Resume v4 - Sebastian Barry.pdf" target="_blank">Resume</a
  >
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #3498db; /* Set a background color for the navbar */
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
