<script lang="ts">
  export let width = "85%";
</script>

<div style="--width:{width}" class="content">
  <slot />
</div>

<style>
  .content {
    margin: auto;
    background-color: var(--gray2);
    color: var(--font1);

    width: var(--width);
    height: fit-content;

    font-weight: 300;
    font-size: 1.1rem;
    /* text-transform: uppercase; */
    padding: 0.5em 0.5em;
    border-width: 2px;
    box-shadow: 0px 0px 15px hsla(39, 77%, 83%, 0.2);
    border-style: solid;
    border-image: linear-gradient(
        to left top,
        var(--blue1),
        var(--gray1),
        var(--blue2)
      )
      1;
  }
</style>
