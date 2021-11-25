<script lang="ts">
  import { fly } from "svelte/transition";
  import { tick } from "svelte";

  // constants:
  import { projects, flyRight } from "./stores";
</script>

<!-- <div class="subnav" in:fly={flyRight}>
  <div class="buttons">
    {#each projects as category}
      <button on:click={() => scrollTo(`${category.title}`)}
        >{category.title}</button
      >
    {/each}
  </div>
</div> -->
