<script lang="ts">
  import Textbox1 from "./textbox1.svelte";
  export let title: string;
  export let date: Date;

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hourCycle: "h24",
  };
</script>

<Textbox1>
  <div class="header">
    <h2 class="title">{title}</h2>
    <h4 class="date">
      created on {date.toLocaleDateString("en-AU", dateOptions)}
    </h4>
  </div>
  <hr />

  <slot>
    <!-- blog content -->
  </slot>

  <div class="footer" />
</Textbox1>

<style>
  .date {
    margin-top: 0.5em;
  }
  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: end;
  }

  .footer {
    height: 5rem;
  }
</style>
