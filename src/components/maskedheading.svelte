<script>
  export let fontSize = "4rem";
  export let background = "var(--gradient3)";
</script>

<div class="wrapper">
  <h2 style="font-size:{fontSize}; background-image: {background}" class="text">
    <slot />
  </h2>
</div>

<style>
  .text {
    display: inline;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding-bottom: 0.2em;
  }
</style>
