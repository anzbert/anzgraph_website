<script lang="ts">
  import { Swipe, SwipeItem } from "svelte-swipe";
  import Card from "../components/card1.svelte";
  import Markdown from "./clock.svx";

  import { fade, fly } from "svelte/transition";
  import { fade1, flyLeft } from "../stores";

  const swipeConfig = {
    defaultIndex: 0,
    showIndicators: true,
    autoplay: false,
    delay: 4000,
    transitionDuration: 500,
  };

  let paths: Array<string> = [];
  for (let i = 0; i < 5; i++) {
    let path = `img/projects/Clock/clock${i}`;
    paths.push(path);
  }
</script>

<div class="markdown" in:fly={flyLeft}>
  <div class="card-wrapper">
    <Card width="fit-content">
      <div class="swipe-holder" in:fade={fade1}>
        <Swipe {...swipeConfig}>
          {#each paths as path}
            <SwipeItem>
              <picture>
                <source srcset="{path}_comp.avif" type="image/avif" />
                <source srcset="{path}_comp.webp" type="image/webp" />
                <img loading="lazy" src="{path}.jpg" alt="project views" />
              </picture>
            </SwipeItem>
          {/each}
        </Swipe>
      </div>
    </Card>
  </div>
  <Markdown />
</div>

<style>
  .card-wrapper {
    margin: 2rem auto;
    width: 100%;
  }
  .swipe-holder {
    --width: clamp(200px, 75vmin, 70vmax);
    height: calc(var(--width) / 4 * 3);
    width: var(--width);
    margin: auto;
  }
  img {
    height: calc(var(--width) / 4 * 3);
    width: var(--width);
    object-fit: contain;
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
