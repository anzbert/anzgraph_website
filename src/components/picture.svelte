<script lang="ts">
  export let path_root: string;
</script>

<picture>
  <source srcset="{path_root}.avif" type="image/avif" />
  <source srcset="{path_root}.webp" type="image/webp" />
  <img
    class="background"
    srcset="{path_root}_compressed.jpg"
    alt="Background"
  />
</picture>
