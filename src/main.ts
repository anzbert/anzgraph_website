// @ts-ignore // ignore TS warning: "./App.svelte is not a module"
import App from "./App.svelte";

const app = new App({
  target: document.body,
  intro: true, // show animations on load
});

export default app;
