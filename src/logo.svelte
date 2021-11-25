<script lang="ts">
  import { logos } from "./stores";

  export let logo = "tools";
  let req_logo = logos[logo];
  export let link = false;
  export let name = false;
  export let height = "1em";
</script>

<div class="wrapper" />
{#if link}
  <a href={req_logo.url}>
    <img
      src={req_logo.path}
      alt="{req_logo.name} logo"
      style="height: {height};"
    />
    {#if name}
      {req_logo.name}
    {/if}
  </a>
{:else}
  <img
    src={req_logo.path}
    alt="{req_logo.name} logo"
    style="height: {height};"
  />
  {#if name}
    <span class="name">{req_logo.name}</span>
  {/if}
{/if}

<style>
  .name {
    color: var(--brown1);
  }
</style>
