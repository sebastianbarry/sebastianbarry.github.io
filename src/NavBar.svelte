<script>
  export let openOverlay;
  import { Route, Router, Link, link } from "svelte-routing";
  import { onMount } from "svelte";
  import { location } from "./stores/stores.js";

  let locationValue = "";
  let isSticky = false;
  let navbarClass = "sticky-exit";

  // Keep track of what route we are at
  location.subscribe((value) => {
    locationValue = value;
    update();
  });

  // Create the event listener for displaying the navbar when scrolling down on the Home route
  onMount(() => {
    window.addEventListener("scroll", update);
    update();

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
    setTimeout(() => {
      navbarClass = isSticky ? "sticky" : "sticky-exit";
    }, 1);
  }
</script>

<header class="sticky-header">
  <nav id="navbar" class={navbarClass}>
    <a href="/" use:link replace class="nav__link">
      <span class="nav__link--text" data-splitting>Home</span>
      <span class="nav__link--text" data-splitting>Home</span>
    </a>
    <a href="/about" use:link replace class="nav__link">
      <span class="nav__link--text" data-splitting>About</span>
      <span class="nav__link--text" data-splitting>About</span>
    </a>
    <a href="javascript:void(0);" on:click={openOverlay} class="nav__link">
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
    <!-- <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <a on:click={openOverlay}>Contact</a>
    <a href="/resources/Resume v4 - Sebastian Barry.pdf" target="_blank"
      >Resume</a
    > -->
  </nav>
  <div id="fade-bar"></div>
</header>

<style>
  .sticky-header {
    position: fixed;
    font-family: "Open Sans", sans-serif;
    color: cyan;
    top: -100px;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: top 0.3s ease-in-out;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: end;
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
    width: 98%;
    z-index: 1000; /* Adjust the z-index as needed */
    transform: translateY(0);
    opacity: 1;
  }

  nav.sticky-exit {
    transform: translateY(-100%);
    opacity: 0;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    outline: none;
    border: none;
  }

  .nav__link {
    font-size: 3.5vw;
    color: #fff;
    display: grid;
    font-style: italic;
    justify-content: center;
    cursor: pointer;
    margin: 0 2vw;
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

  #fade-bar {
    height: 10px;
    background-image: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgba(0, 0, 0, 0)
    );
    width: 100%;
    position: fixed;
    top: 5.5vw;
    z-index: 1;
  }

  @media screen and (max-width: 1366px) {
    .nav__link {
      font-size: 3.5vw;
    }
    #fade-bar {
      top: 6vw;
    }
  }

  @media screen and (max-width: 1024px) {
    .nav__link {
      font-size: 3.5vw;
    }
    #fade-bar {
      top: 6.5vw;
    }
  }

  @media screen and (max-width: 950px) {
    .nav__link {
      font-size: 4.5vw;
    }
    #fade-bar {
      top: 8.4vw;
    }
  }

  @media screen and (max-width: 650px) {
    .nav__link {
      font-size: 5.5vw;
    }
    #fade-bar {
      top: 8vw;
    }
  }

  @media screen and (max-width: 480px) {
    .nav__link {
      font-size: 6.5vw;
    }
    #fade-bar {
      top: 13.5vw;
    }
  }

  @media screen and (max-width: 360px) {
    .nav__link {
      font-size: 6.5vw;
    }
    #fade-bar {
      top: 15vw;
    }
  }
</style>
