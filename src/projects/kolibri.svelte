<script lang="ts">
  import Card from "../components/card1.svelte";
  import Markdown from "./kolibri.svx";

  import { fade, fly } from "svelte/transition";
  import { fade1, flyLeft } from "../stores";

  let paths: Array<string> = [];
  for (let i = 0; i < 0; i++) {
    let path = `img/projects/kolibri/kolibri${i}`;
    paths.push(path);
  }

  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";

  import Construction from "../components/construction.svelte";
</script>

<Construction />

<div class="markdown" in:fly={flyLeft}>
  <div class="card-wrapper">
    <Card width="fit-content">
      <div class="swipe-holder" in:fade={fade1}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          on:slideChange={() => console.log("slide change")}
          on:swiper={(e) => console.log(e.detail[0])}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
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
