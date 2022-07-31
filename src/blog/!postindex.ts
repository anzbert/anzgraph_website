import type { SvelteComponent } from "svelte";

function createPostObject(post: SvelteComponent, metadata: postMeta): post {
  return {
    title: metadata.title,
    date: metadata.date,
    tags: metadata.tags,
    post: post,
  };
}

export let allPosts: Array<post> = [];

// Import posts (?change to dynamic import)
import Post2022_07_19, { meta as meta2022_07_19 } from "../blog/2022-07-19.svx";
allPosts.push(createPostObject(Post2022_07_19, meta2022_07_19));

import Post2022_01_08, { meta as meta2022_01_08 } from "../blog/2022-01-08.svx";
allPosts.push(createPostObject(Post2022_01_08, meta2022_01_08));

import Post2021_11_29, { meta as meta2021_11_29 } from "../blog/2021-11-29.svx";
allPosts.push(createPostObject(Post2021_11_29, meta2021_11_29));

// create hash tags from posts
let set: Set<string> = new Set();
allPosts.forEach((post) => {
  post.tags.forEach((tag) => {
    set.add(tag);
  });
});

set.add("all");
export let hashTags = [...set];
