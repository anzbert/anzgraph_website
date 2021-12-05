import { logos } from "../components/logo.svelte";

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
        name: "Dog Feeder",
        source: {
          jpg: "img/projects/feed/feed0.jpg",
          avif: "",
          webP: "",
        },
        link: "Feed",
        logos: [logos.arduino, logos.c, logos.rpi, logos.node],
      },
    ],
  },
  {
    title: "Coding",
    array: [
      {
        name: "Metronome",
        source: {
          jpg: "img/placeholder.png",
          avif: "",
          webP: "",
        },
        link: "DeskMetro",
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
