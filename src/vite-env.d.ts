/// <reference types="svelte" />
/// <reference types="vite/client" />

// Mute TS errors on these extension imports:
declare module "*.md";
declare module "*.svx";

// GLOBAL TYPES

interface Post {
  title: string;
  date: Date;
  post: SvelteComponent;
  tags: Array<tagTypes>;
}
