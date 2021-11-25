<script lang="ts">
  import Background from "./Background.svelte";
  import Nav from "./Nav.svelte";
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";
  import { tick } from "svelte";

  let currentPage = "Projects"; // Default start page

  const setPage = async (event: { detail: string }) => {
    currentPage = "";
    await tick();
    currentPage = event.detail;
  };
</script>

<div class="wrapper">
  <Background />

  <Nav on:page={setPage} />

  {#if currentPage == "About"} <About />{/if}
  {#if currentPage == "Projects"} <Projects />{/if}
</div>

<style>
  .wrapper {
    position: relative;
    max-height: 100%;

    display: flex;
    flex-direction: column;
  }
</style>
