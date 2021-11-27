<script lang="ts">
  import { fly } from "svelte/transition";
  import Card2 from "../components/card2.svelte";
  import MaskedHeading from "../components/maskedheading.svelte";
  import { tick } from "svelte";

  import Sidebar from "../components/sidebar1.svelte";

  // Constants:
  import { projects, flyRight, flyLeft } from "../stores";

  // Project Files:
  import Xfader from "../markdown/xfader.svelte";
  import Clock from "../markdown/clock.svelte";
  import Pedal from "../markdown/pedal.svelte";
  import Tiny from "../markdown/tiny.svelte";

  async function scrollTo(id: string) {
    currentFocus = "all";
    await tick();
    document.getElementById(`${id}`).scrollIntoView({
      behavior: "smooth",
    });
  }
  let currentFocus = "all";
</script>

<!-- ----------------------------------HMTL ----------------------------------------- -->
<div class="subnav" in:fly={flyRight}>
  <div class="buttons">
    {#each projects as category}
      <button on:click={() => scrollTo(`${category.title}`)}
        >{category.title}</button
      >
    {/each}
  </div>
</div>

<div class="wrapper">
  {#if currentFocus === "all"}
    <div class="project-page">
      <div class="projects">
        {#each projects as category}
          <div class="divider" id={category.title} in:fly={flyLeft}>
            <MaskedHeading fontSize="1.8rem">{category.title}</MaskedHeading>
          </div>

          <div class="content" in:fly={flyLeft}>
            {#each category.array as project}
              <Card2>
                <div slot="header">
                  <h3 class="title">{project.name}</h3>
                </div>

                <div class="image" slot="thumbnail">
                  <img
                    on:click={() => (currentFocus = project.link)}
                    loading="lazy"
                    class="thumbnail"
                    src={project.source.jpg}
                    alt="{project.name} thumbnail picture"
                  />
                  <div id={project.link} class="project-icons">
                    {#each project.logos as logo}
                      <img src={logo.path} alt="" class="icon" />
                    {/each}
                  </div>
                </div>
              </Card2>
            {/each}
          </div>
        {/each}
      </div>

      <!-- SIDEBAR -->
      <div class="sidebar" in:fly={flyRight}>
        <div class="sidebar-content">
          <Sidebar />
        </div>
      </div>
    </div>
  {/if}

  <!-- PROJECT PAGES -->
  {#if currentFocus === "Xfader"}<Xfader />{/if}
  {#if currentFocus === "Clock"}<Clock />{/if}
  {#if currentFocus === "Pedal"}<Pedal />{/if}
  {#if currentFocus === "Tiny"}<Tiny />{/if}
</div>

<!-- -----------------------------CSS --------------------------------------------->
<style>
  /* subnav: */
  .subnav {
    height: 3rem;
    width: 100%;

    margin: 0 auto;
    padding: 0.5em;

    z-index: 4;
    display: flex;
    align-items: center;

    background: var(--gradient2);
    box-shadow: 0px 5px 3px var(--gray2);
  }

  .buttons {
    display: flex;
    /* margin: auto; */
    /* width: min(90%, 45rem); */

    justify-content: end;
    width: 100%;
    gap: max(1.4vw, 1rem);
    margin-right: max(1.4vw, 1rem);
  }

  /* main content: */
  .wrapper {
    flex-grow: 1;
    flex-shrink: 1;

    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 5rem;
  }

  .content {
    margin: auto;
    max-width: min(96%, 960px);

    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    gap: 1.5vmin;
  }

  .divider {
    font-weight: 200;
    text-align: center;
    margin: 3rem 0 0.5rem 0;
    background-image: var(--gradient5);
    /* background-color: var(--gray2); */
  }

  /* card styles: */
  .title {
    white-space: nowrap;
    text-align: center;
    color: var(--brown1);
    font-size: clamp(0.3rem, 4vmin, 1.5rem);
  }

  .thumbnail {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;

    position: relative;
    filter: grayscale(100%);
  }
  .image {
    filter: grayscale(50%);
    transition: all 200ms;
    position: relative;
  }
  .image:hover {
    filter: none;
    transform: scale(1.08);
  }

  .thumbnail:hover {
    filter: none;
  }

  .project-icons {
    position: absolute;
    bottom: 7%;
    left: 5%;
    pointer-events: none;
  }

  .icon {
    height: min(2.8vmin, 1.8rem);
    margin: 0 0.2em;
    filter: drop-shadow(1px 1px 1px var(--gray2));
  }

  /* Sidebar: */
  .sidebar {
    display: none;
  }
  @media (min-width: 1150px) {
    .project-page {
      display: grid;
      grid-template-columns: [left]1fr [center]70% [right]2fr;
    }
    .projects {
      grid-area: center;
    }
    .sidebar {
      display: block;
      grid-area: right;

      /* border: 2px solid red; */
    }
    .sidebar-content {
      position: sticky;
      top: 20%;

      color: white;
    }
  }
</style>
