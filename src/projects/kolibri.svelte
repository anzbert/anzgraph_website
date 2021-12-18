<script lang="ts">
  import Markdown from "./kolibri.svx";
  const picPath: string = "img/projects/kolibri/kolibri";
  const picNumber: number = 13;
  const picCaptions: Array<string> = [
    "The finished box...",
    "Making a stencil",
    "Test seems OK",
    "I am happy!",
    "The original case design",
    "A new mount for the exhaust",
    "And a new PSU mount",
    "The basic layout",
    "All assembled...",
    "",
    "An angled power plug",
    "",
    "Fingers kept safe nicely",
  ];

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  import Projectpage from "../components/projectpage.svelte";
</script>

<Projectpage {picPath} {picNumber} {picCaptions}>
  <div slot="markdown">
    <Markdown />
  </div>
</Projectpage>
