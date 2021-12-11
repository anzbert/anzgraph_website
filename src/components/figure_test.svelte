<script lang="ts">
  export let path: string;
  export let multiformat: boolean;
  export let alt: string = "image";
  export let width: string = "100%";
  export let caption: string = undefined;

  import { checkWebp, checkAvif } from "../utils";

  async function loading(path: string) {
    let suffix = ".jpg";

    if (multiformat) {
      const avifSupport = await checkAvif();
      if (avifSupport) suffix = "_comp.avif";
      else {
        const webpSupport = await checkWebp();
        if (webpSupport) suffix = "_comp.webp";
      }
    }

    const imageUrl = `${path}${suffix}`;
    try {
      let resp = await fetch(imageUrl);
      let imageBlob = await resp.blob();
      let link = URL.createObjectURL(imageBlob);
      return link;
    } catch (err) {
      console.error("error loading image at", imageUrl, "\n", err);
    }
  }
</script>

<figure id="figure">
  {#await loading(path)}
    <div class="loader" />
  {:then image}
    <img {width} src={image} {alt} />
  {/await}
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

<style>
  figure {
    margin: auto;
  }

  img {
    object-fit: contain;
  }

  figcaption {
    position: absolute;
    top: 0;
    background-color: var(--gray2);
    color: var(--font1);
    font-style: italic;
    font-size: smaller;
    font-weight: 100;
    padding: 0.15em 0.8em;
    text-align: center;
    text-transform: none;
  }

  .loader {
    position: absolute;
    top: calc(50% - 1.5rem);
    left: calc(50% - 1.5rem);
    width: 3rem;
    height: 3rem;

    border: 0.2rem solid var(--gray3);
    border-top: 0.2rem solid var(--blue2);

    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
