<script lang="ts">
  location.hash = "projects/xfader";

  import Markdown from "./xfader.svx";
  const picPath: string = "img/projects/xfader/fader";
  const picNumber: number = 3;
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
