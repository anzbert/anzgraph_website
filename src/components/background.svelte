<script lang="ts">
  export let bg_image = "subvertivo-_lab-8HrVclautyw-unsplash";

  let bg_path = "img/background/" + bg_image;
</script>

<picture>
  <source srcset="{bg_path}_comp.avif" type="image/avif" />
  <source srcset="{bg_path}_comp.webp" type="image/webp" />
  <img class="background" srcset="{bg_path}_comp.jpg" alt="Background" />
</picture>

<style>
  .background {
    position: fixed;
    background-position: center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -99;
  }
</style>
