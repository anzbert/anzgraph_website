import { logos } from "../components/logo.svelte";

export const projects: Array<category> = [
  {
    title: "Electronics",
    array: [
      {
        name: "Crossfader",
        source: {
          path: "img/projects/xfader/fader_thumb",
          multiformat: true,
        },
        link: "../projects/xfader.svelte",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Alarm Clock",
        source: {
          path: "img/projects/clock/clock_thumb",
          multiformat: true,
        },
        link: "../projects/clock.svelte",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "USB/Midi Pedal",
        source: {
          path: "img/projects/pedal/pedal_thumb",
          multiformat: true,
        },
        link: "../projects/pedal.svelte",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Dog Feeder",
        source: {
          path: "img/projects/feed/feed_thumb",
          multiformat: true,
        },
        link: "../projects/feed.svelte",
        logos: [logos.arduino, logos.c, logos.rpi, logos.node],
      },
      {
        name: "Bus Bell",
        source: {
          path: "img/projects/bell/bell_thumb",
          multiformat: true,
        },
        link: "../projects/bell.svelte",
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
          path: "img/icons/underconstruction.png",
          multiformat: false,
        },
        link: "../projects/deskmetro.svelte",
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
          path: "img/projects/kolibri/kolibri_thumb",
          multiformat: true,
        },
        link: "../projects/kolibri.svelte",
        logos: [logos.tools],
      },
      {
        name: "Tiny House",
        source: {
          path: "img/icons/underconstruction.png",
          multiformat: false,
        },
        link: "../projects/tiny.svelte",
        logos: [logos.tools],
      },
    ],
  },
];
