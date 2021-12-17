<script lang="ts">
  import { tick } from "svelte";

  import Background from "./components/background.svelte";
  import Nav from "./pages/nav.svelte";
  import About from "./pages/about.svelte";
  import Projects from "./pages/projects.svelte";
  import Blog from "./pages/blog.svelte";

  // Default page:
  let currentPage: pages = "About";

  const setPage = async (event: { detail: pages }) => {
    if (currentPage === event.detail) {
      currentPage = "";
      await tick();
    }
    currentPage = event.detail;
  };
</script>

<div class="wrapper">
  <Background />

  <Nav on:page={setPage} />

  {#if currentPage == "Blog"} <Blog />{/if}
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
