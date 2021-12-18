<script lang="ts">
  import Background from "./components/background.svelte";
  import Nav from "./pages/nav.svelte";
  import About from "./pages/about.svelte";
  import Projects from "./pages/projects.svelte";
  import Blog from "./pages/blog.svelte";

  // Hash-Based Navigation:
  let nav: Array<string> = window.location.hash.slice(1).split("/");
  // console.log("entry hash: ", nav);
  window.onhashchange = () => {
    nav = window.location.hash.slice(1).split("/");
    // console.log("hash changed to: ", nav);
  };
</script>

<div class="wrapper">
  <Nav />

  {#if nav[0] == "about" || !nav[0]} <About />{/if}
  {#if nav[0] == "blog"} <Blog />{/if}
  {#if nav[0] == "projects"} <Projects {nav} />{/if}

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
