<script lang="ts">
  export let caption: string = "";
  export let src: string; // embed link, such as: "https://sketchfab.com/models/21de728eda6e4cc795468fb3ccfe835b/embed?ui_theme=dark"
</script>

<figure class="sketchfab-embed-wrapper">
  <iframe
    title="TH - Framing"
    frameborder="0"
    allowfullscreen
    allow="autoplay; fullscreen; xr-spatial-tracking"
    {src}
  />
  {#if caption.length > 0}
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
