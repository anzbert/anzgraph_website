import "./css/normalize801.css";
import "./css/global.css";

import App from "./app.svelte";
const app = new App({
  target: document.body,
  intro: true, // show animations on load
});

export default app;
