<script lang="ts">
  location.hash = "projects/clock";

  import Markdown from "./clock.svx";
  const picPath: string = "img/projects/clock/clock";
  const picNumber: number = 5;
  const picCaptions: Array<string> = ["", "", "", "", ""];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Projectpage from "../components/projectpage.svelte";
</script>

<Projectpage {picPath} {picNumber} {picCaptions}>
  <div slot="markdown">
    <Markdown />
  </div>
</Projectpage>
