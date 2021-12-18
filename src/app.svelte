<script lang="ts">
  import { tick } from "svelte";

  import Background from "./components/background.svelte";
  import Nav from "./pages/nav.svelte";
  import About from "./pages/about.svelte";
  import Projects from "./pages/projects.svelte";
  import Blog from "./pages/blog.svelte";

  // Default page:
  let nav: Array<string> = ["about", undefined];

  // hash-based navigation:
  window.onhashchange = () => {
    let focus = window.location.hash.slice(1); // remove hash tag (#)
    nav.length = 0;
    nav = focus.split("/");
    // console.log(nav);
  };
</script>

<div class="wrapper">
  <Background />

  <Nav />

  {#if nav[0] == "blog"} <Blog />{/if}
  {#if nav[0] == "about"} <About />{/if}
  {#if nav[0] == "projects"} <Projects subNav={nav[1]} />{/if}
</div>

<style>
  .wrapper {
    position: relative;
    max-height: 100%;

    display: flex;
    flex-direction: column;
  }
</style>
