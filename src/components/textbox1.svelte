<script lang="ts">
</script>

<div class="wrapper">
  <slot />
</div>

<style>
  .wrapper {
    width: clamp(95vmin, 60%, 90vmax);
    margin: auto;
    margin-top: 1rem;

    background-color: var(--gray2);
    padding: 1em;
    border-radius: 0.4em;
  }
</style>
