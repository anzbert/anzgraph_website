<script lang="ts">
  import Markdown from "./deskmetro.svx";
  const picPath: string = "img/projects/deskmetro/deskmetro";
  const picNumber: number = 0;
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
