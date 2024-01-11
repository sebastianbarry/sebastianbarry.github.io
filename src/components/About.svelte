<script>
  import { onMount } from "svelte";
  import { location } from "../stores/stores.js";

  onMount(() => {
    location.update((s) => "about");
  });
</script>

<section id="Title">
  <div>
    <div>
      <i class="fa fa-circle" style="color: blue" />
    </div>
    <div>I'm Sebastian, software developer based in Denver</div>
  </div>
  <div>
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
  }
</style>
