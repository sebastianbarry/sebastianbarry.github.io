<script>
  export let workItem;
  export let i;

  import WorkOverlay from "./WorkOverlay.svelte";

  // content stuff
  const projectName = workItem.projectName;
  const companyDesc = workItem.whatDidYouDo;
  const datesTimeline = workItem.datesTimeline;
  const oneSentenceDesc = workItem.oneSentenceDesc;
  const bannerImageURL = "resources/" + workItem.bannerImageURL;
  const imageAlt = projectName + " banner image";

  // icon stuff
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "grey",
  ];

  // overlay stuff
  let overlayVisible = false;
  function openOverlay() {
    overlayVisible = true;
  }
  function closeOverlay() {
    overlayVisible = false;
  }
</script>

<hr />
<section id={workItem.projectName}>
  <div id="top">
    <div id="icon-div">
      <i class="fa fa-circle" style="color: {colors[i % colors.length]}" />
    </div>
    <div id="company-name-div">
      <p id="project-name">{projectName}</p>
      <p id="company-desc">{companyDesc}</p>
      <p id="dates-timeline">{datesTimeline}</p>
    </div>
    <div id="content-div">
      <p id="one-sentence-description">{oneSentenceDesc}</p>
      <div id="open">
        <a on:click={openOverlay}>Open <i class="fa fa-arrow-right" /></a>
      </div>
    </div>
  </div>
  <div id="bannerimage-div">
    <img src={bannerImageURL} alt={imageAlt} />
  </div>
</section>

<WorkOverlay {workItem} bind:show={overlayVisible} on:close={closeOverlay} />

<style>
  section {
    min-height: 90vh;
    max-height: 150vh;
    height: auto;
  }

  div {
    display: inline-block;
    padding: 0 2vw;
  }

  hr {
    border: 6px solid grey;
    border-radius: 5px;
  }

  a {
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }

  #top {
    display: flex;
    padding: 0px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    text-align: left;
  }

  #icon-div {
    align-self: flex-start;
    margin-top: 2.5em;
  }

  #company-name-div {
    min-width: 20em;
  }

  #project-name {
    font-size: 2em;
    font-weight: bold;
  }

  #company-desc {
    font-size: 1.2em;
  }

  #dates-timeline {
    font-size: 1.2em;
  }

  #content-div {
    font-size: 1.1em;
  }

  #one-sentence-description {
  }

  #open {
    font-size: 1em;
    margin: 1em 0;
  }

  #bannerimage-div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 36vh;
    margin: 0 0 2em 0;
  }

  img {
    height: 50vh;
  }
</style>
