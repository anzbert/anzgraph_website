<script lang="ts">
  import { fly } from "svelte/transition";
  import { flyLeft } from "../stores";

  import Textbox1 from "../components/textbox1.svelte";
  import AboutMe from "./about.svx";

  import Card from "../components/card1.svelte";
  import Logo from "../components/logo.svelte";
</script>

<div class="wrapper">
  <div class="content" in:fly={flyLeft}>
    <Textbox1>
      <AboutMe />
    </Textbox1>
  </div>
  <div class="card-wrapper" in:fly={flyLeft}>
    <Card width="fit-content"
      ><div class="inside-card">
        <div class="card-elements">
          Site made with
          <ul>
            <li>
              <Logo logo="svelte" name={true} link={true} />
            </li>
            <li>
              <Logo logo="vite" name={true} link={true} />
            </li>
            <li>
              <Logo logo="ts" name={true} link={true} />
            </li>
            <li>
              <Logo logo="mdsvex" name={true} link={true} />
            </li>
          </ul>
          Images from
          <ul>
            <li>
              <Logo logo="unsplash" name={true} link={true} />
            </li>
          </ul>
          My Repos
          <ul>
            <li>
              <Logo logo="github" name={true} link={true} />
            </li>
          </ul>
        </div>

        <div class="card-elements">
          Other Tech I Use
          <ul>
            <li>
              <Logo logo="js" name={true} link={true} />
            </li>
            <li>
              <Logo logo="node" name={true} link={true} />
            </li>
            <li>
              <Logo logo="rust" name={true} link={true} />
            </li>
            <li>
              <Logo logo="c" name={true} link={true} />
            </li>
            <li>
              <Logo logo="arduino" name={true} link={true} />
            </li>
            <li>
              <Logo logo="rpi" name={true} link={true} />
            </li>
          </ul>
        </div>
      </div>
    </Card>
  </div>
</div>

<style>
  .wrapper {
    overflow-y: auto;
    overflow-x: hidden;

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 3em 1em;
  }

  .card-wrapper {
    margin-top: 3rem;
    max-width: 70%;
  }

  .inside-card {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;
  }

  .card-elements {
    margin: 0em 0.6em;
    white-space: nowrap;
    width: 9rem;
  }

  li {
    list-style-type: none;
  }
  ul {
    padding-left: 0;
  }
</style>
