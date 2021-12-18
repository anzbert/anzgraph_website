<script lang="ts">
  interface picSources {
    base: string;
    webp?: string;
    avif?: string;
  }
  export let sources: picSources;
  export let spinner: boolean = true;
  export let lazy: boolean = false;
  export let alt: string = "";
  export let caption: string = "";

  let imgVisible: boolean = false;
</script>

<figure class="wrapper">
  {#if spinner}
    <div class="spinner" class:remove-spinner={imgVisible} />
  {/if}

  <picture>
    {#if sources.avif}
      <source srcset={sources.avif} type="image/avif" />
    {/if}
    {#if sources.webp}
      <source srcset={sources.webp} type="image/webp" />
    {/if}

    <img
      loading={lazy ? "lazy" : "eager"}
      srcset={sources.base}
      {alt}
      class:imgVisible
      on:load|once={() => (imgVisible = true)}
    />
  </picture>
  {#if caption !== ""}
    <figcaption class:imgVisible>{caption}</figcaption>
  {/if}
</figure>

<style>
  .wrapper {
    position: relative;
    width: 100%;
  }

  figcaption {
    position: absolute;
    top: 0;
    background-color: var(--gray3);
    border-radius: 0 0 2px 0;
  }

  img {
    width: 100%;
    object-fit: contain;
    aspect-ratio: 4/3;

    opacity: 0;
    transition: 2s;
  }
  .imgVisible {
    opacity: 1;
  }

  .remove-spinner {
    display: none;
  }
  .spinner {
    z-index: 999;
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
