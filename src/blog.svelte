<script lang="ts">
  import { fly } from "svelte/transition";

  // Constants:
  import { flyLeft } from "./stores";
</script>

<div class="wrapper" in:fly={flyLeft}>
  <h1>Blog</h1>
</div>

<style>
</style>
