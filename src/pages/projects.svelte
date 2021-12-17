<script lang="ts">
  import { fly } from "svelte/transition";
  import Card2 from "../components/card2.svelte";
  import MaskedHeading from "../components/maskedheading.svelte";
  import { tick } from "svelte";
  import type { SvelteComponent } from "svelte";

  // Constants:
  import { flyRight, flyLeft } from "../stores";
  import Lazypicture from "../components/lazypicture.svelte";

  // Project Files:
  import { projects } from "../projects/!projectindex";

  // scrolling and page changing
  async function scrollTo(id: string) {
    currentFocus = "all";
    await tick();
    document.getElementById(`${id}`).scrollIntoView({
      behavior: "smooth",
    });
  }

  let currentFocus = "all"; // default is "all"
  function changeFocus(focus: string) {
    document.getElementById("wrapper").scrollTo(0, 0); // scroll to top
    currentFocus = focus; // change page
  }

  // dynamic component loading
  async function asyncImportComponent(path: string): Promise<SvelteComponent> {
    let comp = import(`../projects/${path}.svelte`).then((r) => r.default);
    return comp;
  }
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

<div id="wrapper">
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

                <div
                  class="image"
                  slot="thumbnail"
                  on:click={() => changeFocus(project.link)}
                >
                  <Lazypicture
                    lazy={false}
                    spinner={true}
                    sources={{
                      base: `${project.source.path}.jpg`,
                      webp: `${project.source.path}_comp.webp`,
                      avif: `${project.source.path}_comp.avif`,
                    }}
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
    </div>
  {:else}
    {#await asyncImportComponent(currentFocus) then ProjectPage}
      <svelte:component this={ProjectPage} />
    {/await}
  {/if}
</div>

<!-- -----------------------------CSS --------------------------------------------->
<style>
  .subnav {
    height: 3rem;
    flex-grow: 0;
    flex-shrink: 0;
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
    justify-content: flex-end;
    width: 100%;
    gap: min(1.5vw, 1rem);
    margin-right: max(1.4vw, 1rem);
  }

  .buttons button {
    font-size: 0.9rem;
    padding: 0.2em 0.6em;
  }

  /* main content: */
  #wrapper {
    flex-grow: 1;
    flex-shrink: 1;

    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 4rem;
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
  }

  /* card styles: */
  .title {
    white-space: nowrap;
    text-align: center;
    color: var(--brown1);
    font-size: clamp(0.3rem, 4vmin, 1.5rem);
  }

  .image {
    filter: grayscale(80%);
    transition: all 200ms;
    transform: scale(1.05);
    cursor: pointer;
  }
  .image:hover {
    filter: none;
    transform: scale(1.12);
  }

  .project-icons {
    position: absolute;
    bottom: 8%;
    left: 6%;
    pointer-events: none;
  }

  .icon {
    height: min(2.8vmin, 1.5rem);
    margin: 0 0.2em;
    filter: drop-shadow(1px 1px 1px var(--gray2));
  }
</style>
