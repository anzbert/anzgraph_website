<!-- make a dynamic loader with spinner -->
<script lang="ts">
  export let path: string;
  export let noOfPics: number;
  export let captions = [];

  import Card from "../components/card1.svelte";
  import Markdown from "./kolibri.svx";

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
  for (let i = 0; i <= 12; i++) {
    let path = `img/projects/kolibri/kolibri${i}`;
    paths.push(path);
  }
  import Figure from "../components/figure.svelte";
</script>

<!-- dynamic import gallery module -->


<div class="wrapper">gallery</div>

<style>
</style>
