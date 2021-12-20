<script lang="ts">
  import Markdown from "./pedal.svx";
  const picPath: string = "img/projects/pedal/footp";
  const picNumber: number = 9;
  const picCaptions: Array<string> = [
    "The finished product blending in with the plants",
    "Starting the build...",
    "...until late at night",
    "Always a challenge to all the parts into a box",
    "Program switch and extension ports",
    "A neat-ish fit!",
    "",
    "Almost done!",
    "First test run with external pedals attached",
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
