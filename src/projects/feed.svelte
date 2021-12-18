<script lang="ts">
  location.hash = "projects/feed";

  import Markdown from "./feed.svx";
  const picPath: string = "img/projects/feed/feed";
  const picNumber: number = 12;
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
