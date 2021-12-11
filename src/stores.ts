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

export const defaultSwipeConfig = {
  defaultIndex: 0,
  showIndicators: true,
  autoplay: false,
  delay: 4000,
  transitionDuration: 500,
};
