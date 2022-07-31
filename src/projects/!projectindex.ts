import { logos } from "../components/logo.svelte";

export const projects: Array<category> = [
  {
    title: "Embedded",
    array: [
      {
        name: "Crossfader",
        source: {
          path: "img/projects/xfader/fader_thumb",
        },
        link: "xfader",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Alarm Clock",
        source: {
          path: "img/projects/clock/clock_thumb",
        },
        link: "clock",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "USB/Midi Pedal",
        source: {
          path: "img/projects/pedal/pedal_thumb",
        },
        link: "pedal",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Dog Feeder",
        source: {
          path: "img/projects/feed/feed_thumb",
        },
        link: "feed",
        logos: [logos.arduino, logos.c, logos.rpi, logos.node],
      },
      {
        name: "Bus Bell",
        source: {
          path: "img/projects/bell/bell_thumb",
        },
        link: "bell",
        logos: [logos.arduino, logos.c],
      },
    ],
  },
  {
    title: "Applications",
    array: [
      {
        name: "Metronome",
        source: {
          path: "img/projects/deskmetro/deskmetro0",
        },
        link: "deskmetro",
        logos: [logos.rpi, logos.rust],
      },
      {
        name: "Beat Pads",
        source: {
          path: "img/projects/beatpads/beatpads1",
        },
        link: "beatpads",
        logos: [logos.dart, logos.flutter],
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
        },
        link: "kolibri",
        logos: [logos.tools],
      },
      {
        name: "Tiny House",
        source: {
          path: "img/projects/tiny/tiny_thumb",
        },
        link: "tiny",
        logos: [logos.tools],
      },
    ],
  },
];
