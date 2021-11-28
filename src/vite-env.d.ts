/// <reference types="svelte" />
/// <reference types="vite/client" />

// Mute TS errors on these extension imports:
declare module "*.md";
declare module "*.svx";

// GLOBAL TYPES
interface postMeta {
  title: string;
  date: Date;
  tags: Array<string>;
}
interface post extends postMeta {
  post: SvelteComponent;
}

interface logo {
  name: string;
  path: string;
  url: string;
}

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
