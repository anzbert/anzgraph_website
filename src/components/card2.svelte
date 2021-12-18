<script lang="ts">
  import { scale, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let square = "min(35vmin, 280px)";
  const scaleSettings = {
    duration: 400,
    delay: 400,
    opacity: 0.5,
    start: 0.5,
    easing: quintOut,
  };
</script>

<div style="--square: {square}" class="wrapper">
  <div class="upper-box">
    <div class="card-header">
      <slot name="header" />
    </div>
    <div class="thumbnail">
      <slot name="thumbnail" />
    </div>
    <div class="icons">
      <slot name="icons" />
    </div>
    <slot />
  </div>
  <div class="lower-box" in:scale={scaleSettings} />
</div>

<style>
  .wrapper {
    --wrapper-fraction: 95%;
    --upper-color: var(--sepia1);
    --lower-color: hsla(6, 93%, 71%, 0.7);
    position: relative;
    width: var(--square);
    height: var(--square);

    /* height: calc(var(--square) + 2rem); */
    margin: 0.3em;
  }

  .card-header {
    background-color: var(--green_transp);
    /* background-image: var(--gradient4); */
    padding: 0.3em;
    box-shadow: 1px 1px 3px var(--gray2);
    border-radius: 2px;
    text-shadow: 2px 2px 4px var(--gray1);
  }

  .thumbnail {
    overflow: hidden;
    max-width: 90%;
    margin: auto;
    box-shadow: 2px 2px 2px var(--gray1);
    position: relative;
    border-radius: 2px;
  }

  .upper-box {
    border-radius: 2px;
    z-index: 2;
    background-color: var(--green3);
    /* background-image: var(--gradient4); */
    width: var(--wrapper-fraction);
    height: var(--wrapper-fraction);
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 1px 1px 3px var(--gray2);

    display: flex;
    flex-direction: column;
  }
  .lower-box {
    border-radius: 2px;
    z-index: 1;
    /* background-color: var(--lower-color); */
    background-image: var(--gradient2);
    width: var(--wrapper-fraction);
    height: var(--wrapper-fraction);
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 1px 1px 3px var(--gray2);
  }
</style>
