<script>
  import { onMount } from "svelte";
  import { location } from "../stores/stores.js";

  onMount(() => {
    location.update((s) => "about");
  });
</script>

<section id="About">
  <div class="heading">
    <!-- <div class="icon">
      <i class="fa fa-circle" style="color: blue" />
    </div> -->
    <div class="circular--portrait">
      <img src="resources/images/Sebastian_B-1.jpg" alt="Headshot" />
    </div>
    <div class="greeting">
      Hi there! I'm Sebastian, a software developer based in Denver
    </div>
  </div>
  <div class="content">
    <p>
      I love learning how new systems work, which lends itself very well to
      software development! I am highly detail-oriented and organized, which is
      a strength when it comes to keeping track of all the moving parts of a
      project. I have great interpersonal skills, and a knack for explaining
      complicated things in a simple way. I love working collaboratively with
      others, and creating strong bonds with my team members, which makes me a
      particularly strong leader.
    </p>
    <p>
      When I’m not developing, you will find me working out at the gym, playing
      video games, and creating music! I love weight training, I typically work
      out at my building's gym, and have been lifting weights for 4 years. I
      play Dead by Daylight, Mario Kart, and the Binding of Isaac with my family
      members and friends on my Switch. I also play the piano, and have been
      producing music in FL Studio for 5 years.
    </p>
  </div>
</section>

<style>
  section {
    min-height: 87vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
  }

  p {
    padding: 0 10%;
  }

  .circular--portrait {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
  }
  .circular--portrait img {
    width: 100%;
    height: auto;
    margin-bottom: 120px;
  }

  .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    font-size: 1.5em;
    width: 100%;
  }

  .icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 10%;
  }

  .greeting {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 60%;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    width: 100%;
  }
</style>
