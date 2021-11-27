<script lang="ts">
  import Logo from "./logo.svelte";
</script>

<div class="wrapper">
  <div class="box">
    <h2>Tech Info</h2>

    <Logo logo="js" name={false} height="1.5em" />
    <Logo logo="ts" name={false} height="1.5em" />
    <Logo logo="node" name={false} height="1.5em" />
    <Logo logo="rpi" name={false} height="1.5em" />
    <Logo logo="md" name={false} height="1.5em" />
    <Logo logo="arduino" name={false} height="1.5em" />
    <Logo logo="c" name={false} height="1.5em" />
  </div>
</div>

<style>
  h2 {
    color: var(--brown1);
    text-align: center;
    font-size: 1.8rem;
  }
  .box {
    background-color: var(--green1);
    background-image: var(--gradient4);
    border-radius: 2px;
    padding: 0.4em;
    width: 92%;
    box-shadow: 2px 2px 2px var(--gray2);
  }
</style>
