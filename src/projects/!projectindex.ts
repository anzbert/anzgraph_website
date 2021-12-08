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
          jpg: "img/icons/underconstruction.svg",
          avif: "",
          webP: "",
        },
        link: "Feed",
        logos: [logos.arduino, logos.c, logos.rpi, logos.node],
      },
      {
        name: "Bus Bell",
        source: {
          jpg: "img/icons/underconstruction.svg",
          avif: "",
          webP: "",
        },
        link: "Bell",
        logos: [logos.arduino, logos.c],
      },
    ],
  },
  {
    title: "Coding",
    array: [
      {
        name: "Metronome",
        source: {
          jpg: "img/icons/underconstruction.svg",
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
        name: "Kolibri PC",
        source: {
          jpg: "img/icons/underconstruction.svg",
          avif: "",
          webP: "",
        },
        link: "Kolibri",
        logos: [logos.tools],
      },
      {
        name: "Tiny House",
        source: {
          jpg: "img/icons/underconstruction.svg",
          avif: "",
          webP: "",
        },
        link: "Tiny",
        logos: [logos.tools],
      },
    ],
  },
];
