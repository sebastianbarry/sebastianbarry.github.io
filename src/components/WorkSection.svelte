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
    min-height: 50vh;
    max-height: 150vh;
    height: auto;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
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
    overflow: hidden;
  }

  #icon-div {
    align-self: flex-start;
    padding-top: 7vh;
    height: 100%;
  }

  #company-name-div {
    min-width: 40%;
    max-width: 100%;
  }

  #project-name {
    font-size: 3vw;
    font-weight: bold;
  }

  #company-desc {
    font-size: 1.5vw;
  }

  #dates-timeline {
    font-size: 2vw;
  }

  #content-div {
    font-size: 1.5vw;
    padding: 0 4vw;
  }

  #open {
    font-size: 2vw;
    margin: 2vh 0;
    font-family: "Montserrat", sans-serif;
  }

  #bannerimage-div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 36vh;
    margin-bottom: 4vh;
  }

  img {
    width: 80vw;
  }

  @media screen and (max-width: 950px) {
    hr {
      border: 4px solid grey;
    }

    #icon-div {
      display: none;
    }

    #project-name {
      font-size: 4vw;
    }

    #company-desc {
      font-size: 2vw;
    }

    #dates-timeline {
      font-size: 1.5vw;
    }

    #content-div {
      font-size: 2vw;
    }

    #open {
      font-size: 2.5vw;
    }

    #bannerimage-div {
      min-height: 10vh;
    }
  }

  @media screen and (max-width: 480px) {
    hr {
      border: 4px solid grey;
    }

    #top {
      display: block;
      text-align: center;
    }

    #project-name {
      font-size: 8vw;
    }

    #company-desc {
      font-size: 5vw;
    }

    #dates-timeline {
      font-size: 4vw;
    }

    #content-div {
      font-size: 3.5vw;
    }

    #open {
      font-size: 4vw;
    }

    #bannerimage-div {
      min-height: 10vh;
    }
  }
</style>
