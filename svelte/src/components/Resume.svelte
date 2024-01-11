<script>
  import { onMount } from "svelte";
  import { location } from "../stores/stores.js";

  onMount(() => {
    location.update((s) => "resume");
  });
</script>

<a href="resources/Resume v4 - Sebastian Barry.pdf" target="_blank">Open</a>

<!-- <PdfViewer url="./Resume v4 - Sebastian Barry.pdf" /> -->

<style>
</style>
