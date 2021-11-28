import type { SvelteComponent } from "svelte";

export const tags = [
  "#building",
  "#electronics",
  "#coding",
  "#misc",
  "all",
] as const;
export type tagTypes = typeof tags[number];

function createPostObject(post: SvelteComponent, metadata: Post) {
  return {
    title: metadata.title,
    date: metadata.date,
    tags: metadata.tags,
    post: post,
  };
}

let allPosts: Array<Post> = [];

// Import posts here:
import Post2021_11_27, { meta as meta2021_11_27 } from "../blog/2021-11-27.svx";
allPosts.push(createPostObject(Post2021_11_27, meta2021_11_27));

//////////////////////////////////////////////////////
// export
export default allPosts;
