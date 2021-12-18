<script lang="ts">
  // export let bg_image = "adrien-olichon-X8o-P23flgI-unsplash";
  export let bg_image = "dejan-zakic-LDciXr1ynFk-unsplash";

  let bg_path = "img/background/" + bg_image;

  let imgVisible = false;
</script>

<picture>
  <source srcset="{bg_path}_comp.avif" type="image/avif" />
  <source srcset="{bg_path}_comp.webp" type="image/webp" />
  <img
    on:load|once={() => (imgVisible = true)}
    class:imgVisible
    srcset="{bg_path}_comp.jpg"
    alt="Background"
  />
</picture>

<style>
  img {
    position: fixed;
    background-position: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -99;

    opacity: 0;
    transition: 2s;
  }
  .imgVisible {
    opacity: 1;
  }
</style>
