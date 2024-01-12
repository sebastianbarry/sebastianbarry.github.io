<script>
  import { onMount } from "svelte";
  import { location } from "../stores/stores.js";

  onMount(() => {
    location.update((s) => "about");
  });
</script>

<section id="About">
  <div class="heading">
    <div class="icon">
      <i class="fa fa-circle" style="color: blue" />
    </div>
    <div class="greeting">
      Hi there! I'm Sebastian, a software developer based in Denver
    </div>
  </div>
  <div class="content">
    <p>
      Hi there, I’m sebastian a developer based in Denver with a passion for
      meaningful programming…
    </p>
    <p>When I’m not developing you will find me working out, etc. etc.</p>
  </div>
</section>

<style>
  section {
    height: 87vh;
    max-height: 87vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }

  .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
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
    width: 90%;
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
