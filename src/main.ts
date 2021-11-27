// @ts-ignore // ignore TS warning: "./App.svelte is not a module"
import App from "./pages/app.svelte";
import "./css/normalize801.css";
import "./css/global.css";

const app = new App({
  target: document.body,
  intro: true, // show animations on load
});

export default app;
