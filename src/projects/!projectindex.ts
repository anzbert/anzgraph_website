import { logos } from "../components/logo.svelte";

export const projects: Array<category> = [
  {
    title: "Embedded",
    array: [
      {
        name: "Crossfader",
        source: {
          path: "img/projects/xfader/fader_thumb",
          multiformat: true,
        },
        link: "xfader",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Alarm Clock",
        source: {
          path: "img/projects/clock/clock_thumb",
          multiformat: true,
        },
        link: "clock",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "USB/Midi Pedal",
        source: {
          path: "img/projects/pedal/pedal_thumb",
          multiformat: true,
        },
        link: "pedal",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Dog Feeder",
        source: {
          path: "img/projects/feed/feed_thumb",
          multiformat: true,
        },
        link: "feed",
        logos: [logos.arduino, logos.c, logos.rpi, logos.node],
      },
      {
        name: "Bus Bell",
        source: {
          path: "img/projects/bell/bell_thumb",
          multiformat: true,
        },
        link: "bell",
        logos: [logos.arduino, logos.c],
      },
    ],
  },
  {
    title: "Desktop",
    array: [
      {
        name: "Metronome",
        source: {
          path: "img/icons/underconstruction.png",
          multiformat: false,
        },
        link: "deskmetro",
        logos: [logos.rpi, logos.rust],
      },
    ],
  },
  {
    title: "Build",
    array: [
      {
        name: "Kolibri PC",
        source: {
          path: "img/projects/kolibri/kolibri_thumb",
          multiformat: true,
        },
        link: "kolibri",
        logos: [logos.tools],
      },
      {
        name: "Tiny House",
        source: {
          path: "img/projects/tiny/tiny_thumb",
          multiformat: true,
        },
        link: "tiny",
        logos: [logos.tools],
      },
    ],
  },
];
