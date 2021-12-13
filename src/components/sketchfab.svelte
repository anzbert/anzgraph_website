<script lang="ts">
  export let caption: string = undefined;
  export let src: string; // embed link, such as: "https://sketchfab.com/models/21de728eda6e4cc795468fb3ccfe835b/embed?ui_theme=dark"
</script>

<figure class="sketchfab-embed-wrapper">
  <iframe
    title="TH - Framing"
    frameborder="0"
    allowfullscreen
    allow="autoplay; fullscreen; xr-spatial-tracking"
    xr-spatial-tracking
    execution-while-out-of-viewport
    execution-while-not-rendered
    web-share
    {src}
  />
  {#if caption}
    <figcaption>
      {caption}
    </figcaption>
  {/if}
</figure>

<style>
  iframe {
    display: block;
    width: min(100%, 500px);
    height: 180px;
  }
</style>
