<script lang="ts">
  import Card from "../components/card1.svelte";
  import Markdown from "./bell.svx";

  import { fade, fly } from "svelte/transition";
  import { fade1, flyLeft } from "../stores";

  // gallery module:
  import { Swipe, SwipeItem } from "svelte-swipe";
  const swipeConfig = {
    defaultIndex: 0,
    showIndicators: true,
    autoplay: false,
    delay: 4000,
    transitionDuration: 500,
  };
  let SwipeComp: any; // from swipe module. type unknown
  function nextSlide() {
    SwipeComp.nextItem();
  }
  function prevSlide() {
    SwipeComp.prevItem();
  }

  // pictures:
  let paths: Array<string> = [];
  for (let i = 0; i <= 2; i++) {
    let path = `img/projects/bell/bell${i}`;
    paths.push(path);
  }
  import Figure from "../components/figure_test.svelte";
  let captions = ["", "", ""];

  import Construction from "../components/construction.svelte";
</script>

<Construction />

<div class="markdown" in:fly={flyLeft}>
  <div class="card-wrapper">
    <Card width="fit-content">
      <div class="swipe-holder" in:fade={fade1}>
        <Swipe {...swipeConfig} bind:this={SwipeComp}>
          {#each paths as path, index}
            <SwipeItem>
              <Figure {path} multiformat={true} caption={captions[index]} />
            </SwipeItem>
          {/each}
        </Swipe>
      </div>
    </Card>
    <div class="swipe-buttons">
      <button on:click={prevSlide}>Prev</button>
      <button on:click={nextSlide}>Next</button>
    </div>
  </div>
  <Markdown />
</div>

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

  .swipe-buttons {
    margin-top: 0.3rem;
  }
  .swipe-buttons button {
    font-size: 0.8rem;
    padding: 0.2em 4em;
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
