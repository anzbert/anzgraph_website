<script lang="ts">
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher<{ page: string }>();

  // Constants:
  import { flyRight, flyTop } from "./stores";

  let showMenu: boolean;

  // remove menu when screen width / orientation changes:
  const mq_width = window.matchMedia("(max-width: 500px)");
  mq_width.addEventListener("change", (e) => {
    if (!e.matches) showMenu = false;
  });
</script>

<menu transition:fly={flyTop}>
  <h1 class="title">ANZ GRAPH</h1>
  <div class="buttons">
    <button
      class="menu-item text-button"
      on:click={() => dispatch("page", "Projects")}>Projects</button
    >
    <button
      class="menu-item text-button"
      on:click={() => dispatch("page", "About")}>About</button
    >
    <a href="https://github.com/anzbert"
      ><img
        class="logo-icon text-button"
        src="img/logos/github.png"
        alt="GitHub Logo"
      />
    </a>
    <div
      class="menu-icon"
      on:click={() => {
        showMenu = true;
      }}
    >
      <div class="burger" />
      <div class="burger" />
      <div class="burger" />
    </div>
  </div>
</menu>

<!-- MENU ON SMALL DISPLAYS: -->
{#if showMenu === true}
  <menu in:fly={{ ...flyRight, delay: 0 }} class="popup-menu">
    <a href="https://github.com/anzbert"
      ><img
        class="logo-icon menu-item"
        src="img/logos/github.png"
        alt="GitHub Logo"
      />
    </a>
    <button
      class="menu-item "
      on:click={() => {
        showMenu = false;
        dispatch("page", "Projects");
      }}>Projects</button
    >
    <button
      class="menu-item "
      on:click={() => {
        showMenu = false;
        dispatch("page", "About");
      }}>About</button
    >
    <div
      class="menu-icon"
      on:click={() => {
        showMenu = false;
      }}
    >
      <div class="close-x" />
    </div>
  </menu>
{/if}

<style>
  menu {
    height: 4rem;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;

    margin: 0;
    padding: 0.8rem;
    padding-left: max(2vw, 1rem);

    z-index: 10;
    display: flex;
    align-items: center;
    background: var(--gradient1);
    box-shadow: 0px 5px 3px var(--gray1);
  }

  * {
    user-select: none;
  }

  .title {
    margin: 0 auto 0 0;
    white-space: nowrap;
    height: 2rem;
    color: var(--brown);
  }

  .buttons {
    gap: max(1.4vw, 1rem);

    display: flex;
    align-items: center;
  }
  .logo-icon {
    height: 2.3rem;
  }
  .menu-icon {
    display: none;
  }

  @media (max-width: 500px) {
    .popup-menu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 20;
      gap: 5vw;
    }

    .text-button {
      display: none;
    }
    .buttons {
      gap: 5vw;
      width: 100%;
    }

    /* css icons: */
    .menu-icon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 2rem;
      width: 2rem;
      margin-left: auto;
    }
    .burger {
      width: 32px;
      height: 6px;
      background-color: var(--gray2);
    }

    .close-x {
      width: 2rem;
      height: 2rem;
      background: linear-gradient(
          45deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) 43%,
          var(--gray2) 45%,
          var(--gray2) 55%,
          rgba(0, 0, 0, 0) 57%,
          rgba(0, 0, 0, 0) 100%
        ),
        linear-gradient(
          135deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) 43%,
          var(--gray2) 45%,
          var(--gray2) 55%,
          rgba(0, 0, 0, 0) 57%,
          rgba(0, 0, 0, 0) 100%
        );
    }
  }
</style>
