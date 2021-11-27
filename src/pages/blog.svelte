<script lang="ts">
  import { fly } from "svelte/transition";
  import { flyLeft } from "../stores";

  import BlogEntryBox from "../components/blogentrybox.svelte";

  // Import posts:
  import On2021_11_27 from "../blog/2021-11-27.svx";
</script>

<div class="wrapper" in:fly={flyLeft}>
  <BlogEntryBox title="test" date={new Date("2021-11-27")}>
    <On2021_11_27 />
  </BlogEntryBox>
</div>

<style>
</style>
