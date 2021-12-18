<script lang="ts">
  import Background from "./components/background.svelte";
  import Nav from "./pages/nav.svelte";
  import About from "./pages/about.svelte";
  import Projects from "./pages/projects.svelte";
  import Blog from "./pages/blog.svelte";

  // Start Page:
  let nav: Array<string> = ["about", undefined];

  // hash-based navigation:
  window.onhashchange = () => {
    let hash = window.location.hash.slice(1); // remove hash tag (#)
    nav = hash.split("/");
    console.log(nav);
  };
</script>

<div class="wrapper">
  <Nav />

  {#if nav[0] == "blog"} <Blog />{/if}
  {#if nav[0] == "about"} <About />{/if}
  {#if nav[0] == "projects"} <Projects subNav={nav[1]} />{/if}

  <Background />
</div>

<style>
  .wrapper {
    position: relative;
    max-height: 100%;

    display: flex;
    flex-direction: column;
  }
</style>
