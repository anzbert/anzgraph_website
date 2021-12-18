<script lang="ts">
  import Markdown from "./pedal.svx";
  const picPath: string = "img/projects/pedal/footp";
  const picNumber: number = 9;
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
