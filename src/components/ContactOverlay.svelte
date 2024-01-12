<script>
  export let show;

  import { createEventDispatcher } from "svelte";
  import { each } from "svelte/internal";
  import { onMount, afterUpdate } from "svelte";

  // overlay stuff
  let overlayClass = "";

  onMount(() => {
    updateOverlayClass();
  });

  afterUpdate(() => {
    updateOverlayClass();
  });

  function updateOverlayClass() {
    setTimeout(() => {
      overlayClass = show ? "visible" : "";
    }, 10); // Adjust the delay as needed
  }

  // on close stuff
  const dispatch = createEventDispatcher();
  function close() {
    dispatch("close");
  }
  function handleClick() {
    setTimeout(() => {
      close();
    }, 10); // Adjust the delay as needed
  }
</script>

{#if show}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="overlay {overlayClass}" on:click={handleClick}>
    <div class="popup" on:click={(e) => e.stopPropagation()}>
      <!-- Close button -->
      <span class="close-btn" on:click={handleClick}
        ><i class="fa fa-times" /></span
      >
      <!-- Content -->
      <div id="title">Contact</div>
      <hr />
      <div id="content">Contact me!</div>
      <!-- End content -->
    </div>
  </div>
{/if}

<style>
  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    font-size: 1.5em;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    font-family: "Inter", sans-serif;
  }

  .visible {
    display: flex;
    z-index: 1000;
    opacity: 1;
  }

  .popup {
    background: rgba(0, 0, 0, 0) 000;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 85vw;
    max-height: 80vh;
    height: 100%;
    width: 100%;
  }

  .tech {
    display: inline-block;
    padding: 0.5em;
    margin: 0.5em;
    border: 8px solid grey;
    border-radius: 5px;
    background-color: blue;
    border-color: darkblue;
  }

  #title {
    font-size: 2em;
    font-weight: bold;
  }

  #content {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: left;
  }

  #technologies {
    display: inline-block;
    width: 100%;
    height: fit-content;
  }

  #tasks {
    display: grid;
    width: 100%;
    height: 70%;
    align-content: center;
    line-height: 2em;
  }

  hr {
    border: 6px solid lightgrey;
    border-radius: 5px;
  }

  li {
    list-style: " - ";
  }

  .close-btn {
    position: absolute;
    top: 4vh;
    left: 10vh;
    cursor: pointer;
    font-size: 3em;
  }
</style>
