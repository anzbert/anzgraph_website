<script lang="ts">
  export let path: string;
  export let multiformat: boolean;
  export let alt: string = "image";
  export let width: string = "100%";
  export let caption: string = undefined;
</script>

<figure>
  <picture>
    {#if multiformat}
      <source srcset="{path}_comp.avif" type="image/avif" />
      <source srcset="{path}_comp.webp" type="image/webp" />
    {/if}
    <img loading="lazy" {width} srcset="{path}.jpg" {alt} />
  </picture>
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
</style>
