<script lang="ts">
  import Markdown from "./pedal.svx";
  const picPrefixPath: string = "img/projects/pedal/footp";
  const modernFormats: boolean = true;
  const pictures: number = 9;
  const captions: Array<string> = ["", "", "", "", ""];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Card from "../components/card1.svelte";
  import Figure from "../components/figure3.svelte";
  import { getSuffix } from "../utils";
  import { fade, fly } from "svelte/transition";
  import { fade1, flyLeft, defaultSwipeConfig } from "../stores";
  import { Swipe, SwipeItem } from "svelte-swipe";
  import type { SvelteComponent } from "svelte";
  let SwipeComponent: SvelteComponent; // from swipe module. type unknown

  let paths: Array<string> = [];
  for (let i = 0; i < pictures; i++) {
    let path = `${picPrefixPath}${i}`;
    paths.push(path);
  }
</script>

{#await getSuffix(modernFormats) then suffix}
  <div class="markdown" in:fly={flyLeft}>
    <div class="card-wrapper">
      <Card width="fit-content">
        <div class="swipe-holder" in:fade={fade1}>
          <Swipe {...defaultSwipeConfig} bind:this={SwipeComponent}>
            {#each paths as path, index}
              <SwipeItem>
                <div class="image-container">
                  <Figure path={`${path}${suffix}`} caption={captions[index]} />
                </div>
              </SwipeItem>
            {/each}
          </Swipe>
        </div>
      </Card>
      <div class="swipe-buttons">
        <button
          on:click={() => {
            SwipeComponent.prevItem();
          }}>Prev</button
        >
        <button
          on:click={() => {
            SwipeComponent.nextItem();
          }}>Next</button
        >
      </div>
    </div>
    <Markdown />
  </div>
{/await}

<style>
  .card-wrapper {
    margin: 2rem auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .swipe-holder {
    --width: clamp(200px, 75vmin, 70vmax);
    height: calc(var(--width) / 4 * 3);
    width: var(--width);
    margin: auto;
  }

  .image-container {
    height: calc(var(--width) / 4 * 3);
  }

  .swipe-buttons {
    margin-top: 0.3rem;
  }
  .swipe-buttons button {
    font-size: 0.8rem;
    padding: 0.2em 2.4em;
    margin: 0 1em;
  }

  .markdown {
    width: clamp(95vmin, 60%, 90vmax);
    margin: auto;
    margin-top: 1rem;

    background-color: var(--gray2);
    padding: 1em;
    border-radius: 0.4em;
  }

  div :global(h1) {
    margin-bottom: 1em;
    text-align: end;
  }
</style>
