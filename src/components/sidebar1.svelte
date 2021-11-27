<script lang="ts">
  import Logo from "./logo.svelte";
  import Card from "./card1.svelte";
</script>

<div class="wrapper">
  <div class="box">
    <Card width="max-content">
      <h2>Tech Info</h2>

      <Logo logo="js" name={true} link={true} height="1.2em" />
      <Logo logo="ts" name={true} link={true} height="1.2em" />
      <Logo logo="node" name={true} link={true} height="1.2em" />
      <Logo logo="rpi" name={true} link={true} height="1.2em" />
      <Logo logo="arduino" name={true} link={true} height="1.2em" />
      <Logo logo="c" name={true} link={true} height="1.2em" />
    </Card>
  </div>
</div>

<style>
  h2 {
    color: var(--blue1);
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-transform: none;
    /* background-color: var(--green1); */
    /* background-image: var(--gradient1); */
    /* border-radius: 1.8rem; */
  }
  .box {
    width: 90%;
  }
</style>
