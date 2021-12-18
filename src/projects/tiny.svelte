<script lang="ts">
  import Markdown from "./tiny.svx";
  const picPath: string = "img/projects/tiny/tiny";
  const picNumber: number = 1;
  const picCaptions: Array<string> = ["A cozy home", "", "", "", ""];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Projectpage from "../components/projectpage.svelte";

  import Construction from "../components/construction.svelte";
</script>

<Construction />

<Projectpage {picPath} {picNumber} {picCaptions}>
  <div slot="markdown">
    <Markdown />
  </div>
</Projectpage>
