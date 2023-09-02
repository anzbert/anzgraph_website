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
        name: "Foot Switch",
        source: {
          path: "img/projects/multi_pedal/multi_pedal0",
        },
        link: "multi_pedal",
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
        name: "Breath Controller",
        source: {
          path: "img/projects/midi_blows/midi_blows_thumb",
        },
        link: "midi_blows",
        logos: [logos.arduino, logos.c],
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
    title: "Coding",
    array: [
      {
        name: "Midi Mute&Route",
        source: {
          path: "img/projects/midi_mute/midi_mute0",
        },
        link: "midi_mute",
        logos: [logos.reaktor_white],
      },
      {
        name: "Rusty Link",
        source: {
          path: "img/projects/rusty_link/rusty_link0",
        },
        link: "rusty_link",
        logos: [logos.rust],
      },
      {
        name: "Midi Poly Grid",
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
