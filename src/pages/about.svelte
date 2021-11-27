<script lang="ts">
  import { fly } from "svelte/transition";

  import Card from "../components/card.svelte";
  import MaskedHeading from "../components/MaskedHeading.svelte";
  import Textbox1 from "../components/textbox1.svelte";

  import Logo from "../components/logo.svelte";

  // Constants:
  import { flyLeft } from "../stores";
</script>

<div class="wrapper" in:fly={flyLeft}>
  <div class="content">
    <Textbox1>
      <div class="heading">
        <MaskedHeading background="var(--gradient3)">Hi!</MaskedHeading>
      </div>
      <div class="text-block">
        <p>And welcome to my website!</p>
        <p>
          My name is Andreas and I live in Perth, in the southwest of Australia.
        </p>
        <p>
          I made this site as a portfolio to showcase some of my building,
          electronics and coding projects. Making it was a coding exercise in
          itself and I hope you like the result.
        </p>
        <p>
          Professionally, I am a Registered Nurse and former Cabinet Maker. But
          as you can see, I like to dabble in many different areas, such as
          electronics and micro controllers, coding, pc hardware, board games,
          music production and playing the guitar.
        </p>
        <p>
          I am mostly self-taught and always looking for the next exciting thing
          to learn!
        </p>
      </div>
    </Textbox1>
  </div>
  <div class="card-wrapper">
    <Card width="fit-content"
      ><div class="inside-card">
        <div class="card-elements">
          Site made with:
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
          Images from:
          <ul>
            <li>
              <Logo logo="unsplash" name={true} link={true} />
            </li>
          </ul>
          My Repos:
          <ul>
            <li>
              <Logo logo="github" name={true} link={true} />
            </li>
          </ul>
        </div>

        <div class="card-elements">
          Other Tech I Use:
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

  .content {
    max-width: 960px;
  }

  .heading {
    text-indent: 5%;
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
  }

  li {
    list-style-type: none;
  }
  ul {
    padding-left: 0;
  }
</style>
