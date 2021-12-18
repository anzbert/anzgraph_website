<script lang="ts">
  import Markdown from "./bell.svx";
  const picPath: string = "img/projects/bell/bell";
  const picNumber: number = 3;
  const picCaptions: Array<string> = ["The finished door bell", "", "", "", ""];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Projectpage from "../components/projectpage.svelte";
</script>

<Projectpage {picPath} {picNumber} {picCaptions}>
  <div slot="markdown">
    <Markdown />
  </div>
</Projectpage>
