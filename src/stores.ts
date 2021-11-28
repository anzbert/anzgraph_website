import { quintOut } from "svelte/easing";

// CONSTANTS
export const flyLeft = {
  easing: quintOut,
  delay: 150,
  duration: 350,
  opacity: 0.5,
  x: -window.innerWidth,
  y: 0,
};
export const flyRight = {
  ...flyLeft,
  x: window.innerWidth,
  y: 0,
};

export const flyTop = {
  ...flyLeft,
  x: 0,
  y: -window.innerHeight,
};

export const fade1 = { delay: 400, duration: 350 };

// PROJECTS
interface logo {
  name: string;
  path: string;
  url: string;
}

export const logos: { [key: string]: logo } = {
  mdsvex: {
    name: "mdsvex",
    path: "img/logos/mdsvex.png",
    url: "https://mdsvex.com",
  },
  vite: {
    name: "Vite",
    path: "img/logos/vite.svg",
    url: "https://vitejs.dev",
  },
  arduino: {
    name: "Arduino",
    path: "img/logos/arduino.svg",
    url: "https://www.arduino.cc",
  },
  c: {
    name: "C",
    path: "img/logos/C_lang.svg",
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  js: {
    name: "Javascript",
    path: "img/logos/js.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  cpp: {
    name: "C++",
    path: "img/logos/cpp_lang.svg",
    url: "https://en.wikipedia.org/wiki/C%2B%2B",
  },
  md: {
    name: "Markdown",
    path: "img/logos/markdown_white.svg",
    url: "https://en.wikipedia.org/wiki/Markdown",
  },
  node: {
    name: "NodeJS",
    path: "img/logos/nodejs_white_bg.svg",
    url: "https://nodejs.org",
  },
  rpi: {
    name: "Raspberry Pi",
    path: "img/logos/rpi.svg",
    url: "https://www.raspberrypi.com",
  },
  rust: {
    name: "Rust",
    path: "img/logos/rust_lang_color.png",
    url: "https://www.rust-lang.org",
  },
  ts: {
    name: "Typescript",
    path: "img/logos/typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  svelte: {
    name: "Svelte",
    path: "img/logos/svelte.svg",
    url: "https://svelte.dev",
  },
  github: {
    name: "Github",
    path: "img/logos/github.png",
    url: "https://github.com/anzbert",
  },
  unsplash: {
    name: "Unsplash",
    path: "img/logos/unsplash.svg",
    url: "https://unsplash.com",
  },
  tools: {
    name: "Tools",
    path: "img/logos/hammer_white_bg.svg",
    url: "https://en.wikipedia.org/wiki/Tool",
  },
};

interface category {
  title: string;
  array: Array<project>;
}
interface project {
  name: string;
  source: sourceSet;
  link: string;
  logos: Array<logo>;
}
interface sourceSet {
  jpg: string;
  avif: string;
  webP: string;
}

export const projects: Array<category> = [
  {
    title: "Electronics",
    array: [
      {
        name: "Crossfader",
        source: {
          jpg: "img/projects/fader1.jpg",
          avif: "",
          webP: "",
        },
        link: "Xfader",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Alarm Clock",
        source: {
          jpg: "img/projects/clock1.jpg",
          avif: "",
          webP: "",
        },
        link: "Clock",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "USB/Midi Pedal",
        source: {
          jpg: "img/projects/pedal2.jpg",
          avif: "",
          webP: "",
        },
        link: "Pedal",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Dog Timer",
        source: {
          jpg: "img/placeholder.png",
          avif: "",
          webP: "",
        },
        link: "DogTimer",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Pi Dog Feeder",
        source: {
          jpg: "img/placeholder.png",
          avif: "",
          webP: "",
        },
        link: "DogPi",
        logos: [logos.rpi, logos.node],
      },
    ],
  },
  {
    title: "Coding",
    array: [
      {
        name: "Live Metronome",
        source: {
          jpg: "img/placeholder.png",
          avif: "",
          webP: "",
        },
        link: "DesktopMetro",
        logos: [logos.rpi, logos.rust],
      },
    ],
  },
  {
    title: "Building",
    array: [
      {
        name: "Tiny House",
        source: {
          jpg: "img/placeholder.png",
          avif: "",
          webP: "",
        },
        link: "Tiny",
        logos: [logos.tools],
      },
    ],
  },
];
