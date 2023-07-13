<script lang="ts">
  import Markdown from "./multi_pedal.svx";
  const picPath: string = "img/projects/multi_pedal/multi_pedal";
  const picNumber: number = 1;
  const picCaptions: Array<string> = [];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Projectpage from "../components/projectpage.svelte";
</script>

<Projectpage {picPath} {picNumber} {picCaptions}>
  <div slot="markdown">
    <Markdown />
  </div>
</Projectpage>
