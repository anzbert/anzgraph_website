import "./css/normalize801.css";
import "./css/global.css";

// import { getSuffix } from "./utils";
// export let suffix: string;
// getSuffix().then((res) => {
//   suffix = res;
// });

import App from "./app.svelte";

const app = new App({
  target: document.body,
  intro: true, // show animations on load
});

export default app;
