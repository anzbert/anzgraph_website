<script>
  export let fontSize = "4rem";
  export let background = "var(--gradient3)";
</script>

<div class="wrapper">
  <div
    style="font-size:{fontSize}; background-image: {background}"
    class="text"
  >
    <slot />
  </div>
</div>

<style>
  .wrapper {
  }
  .text {
    display: inline;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding-bottom: 0.2em;
  }
</style>
