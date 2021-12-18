<script lang="ts">
  location.hash = "projects/deskmetro";

  import Markdown from "./deskmetro.svx";
  const picPath: string = "img/projects/deskmetro/deskmetro";
  const picNumber: number = 1;
  const picCaptions: Array<string> = ["An alpha of a prototype 😝", ""];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Projectpage from "../components/projectpage.svelte";
</script>

<Projectpage {picPath} {picNumber} {picCaptions} underConstruction={true}>
  <div slot="markdown">
    <Markdown />
  </div>
</Projectpage>
