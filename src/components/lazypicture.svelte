<script lang="ts">
  interface imgSources {
    jpg: string | null;
    webp: string | null;
    avif: string | null;
  }
  export let sources: imgSources;
  export let lazy: boolean = false;
  export let alt: string = "";
  export let spinner: boolean = true;

  let imgVisible: boolean = false;
</script>

{#if spinner}
  <div class="loader" class:loader-invisible={imgVisible} />
{/if}
<picture>
  {#if sources.avif}
    <source srcset={sources.avif} type="image/avif" />
  {/if}
  {#if sources.webp}
    <source srcset={sources.webp} type="image/avif" />
  {/if}

  <img
    loading={lazy ? "lazy" : "eager"}
    srcset={sources.jpg}
    {alt}
    class:imgVisible
    on:load|once={() => (imgVisible = true)}
  />
</picture>

<style>
  img {
    width: 100%;
    object-fit: contain;

    opacity: 0;
    transition: 2s;
  }
  .imgVisible {
    opacity: 1;
  }

  .loader-invisible {
    display: none;
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
