<script lang="ts">
  export let picPath: string = "";
  export let picNumber: number = 0;
  export let picCaptions: Array<string> = [];
  export let underConstruction: boolean = false;
  // slot name="markdown"
  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Card from "../components/card1.svelte";
  import Lazypicture from "../components/lazypicture.svelte";
  import { fade, fly } from "svelte/transition";
  import { fade1, flyLeft, defaultSwipeConfig } from "../stores";
  import { Swipe, SwipeItem } from "svelte-swipe";

  import type { SvelteComponent } from "svelte";
  let SwipeComponent: SvelteComponent; // from swipe module. type unknown

  let paths: Array<string> = [];
  if (picPath !== "") {
    for (let i = 0; i < picNumber; i++) {
      let path = `${picPath}${i}`;
      paths.push(path);
    }
  }

  const swipeConfig =
    picNumber > 1
      ? { ...defaultSwipeConfig }
      : { ...defaultSwipeConfig, showIndicators: false };

  import Construction from "./construction.svelte";
</script>

{#if underConstruction}
  <Construction />
{/if}
<div class="markdown" in:fly={flyLeft}>
  <div class="card-wrapper">
    <Card width="fit-content">
      <div class="swipe-holder" in:fade={fade1}>
        <Swipe {...swipeConfig} bind:this={SwipeComponent}>
          {#each paths as path, index}
            <SwipeItem>
              <div class="image-container">
                <Lazypicture
                  caption={picCaptions[index]}
                  lazy={false}
                  spinner={true}
                  sources={{
                    base: `${path}.jpg`,
                    webp: `${path}_comp.webp`,
                    avif: `${path}_comp.avif`,
                  }}
                />
              </div>
            </SwipeItem>
          {/each}
        </Swipe>
        {#if picNumber > 1}
          <button
            class="swipe-button button-prev"
            on:click={() => {
              SwipeComponent.prevItem();
            }}>&lt;</button
          >
          <button
            class="swipe-button button-next"
            on:click={() => {
              SwipeComponent.nextItem();
            }}>&gt;</button
          >
        {/if}
      </div>
    </Card>
  </div>
  <slot name="markdown" />
  <slot />
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
    position: relative;
    --width: clamp(200px, 75vmin, 70vmax);
    height: calc(var(--width) / 4 * 3);
    width: var(--width);
    margin: auto;
  }

  .image-container {
    height: calc(var(--width) / 4 * 3);
  }

  .swipe-button {
    font-size: 1.8rem;
    font-weight: bold;
    padding: 0;
    margin: 0;

    background-color: var(--gray1);
    color: var(--font1);
    /* border: none; */
    box-shadow: none;
    text-shadow: 0 0 5px var(--gray1);

    border-radius: 50%;
    position: absolute;
    z-index: 2;
    bottom: calc(50% - 1em);
    width: 2em;
    height: 2em;

    filter: drop-shadow(2px 2px 2px var(--gray1));
    opacity: 0.7;
  }

  .swipe-button:hover {
    background-color: hsla(0, 0%, 0%, 0.6);
  }

  .button-prev {
    left: 0.3em;
  }
  .button-next {
    right: 0.3em;
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
    margin-bottom: 0.2em;
    text-align: end;
  }
</style>
