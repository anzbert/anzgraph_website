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

// Import posts
import Post2021_11_26, { meta as meta2021_11_26 } from "../blog/2021-11-26.svx";
allPosts.push(createPostObject(Post2021_11_26, meta2021_11_26));

import Post2021_11_27, { meta as meta2021_11_27 } from "../blog/2021-11-27.svx";
allPosts.push(createPostObject(Post2021_11_27, meta2021_11_27));

import Post2021_11_28, { meta as meta2021_11_28 } from "../blog/2021-11-28.svx";
allPosts.push(createPostObject(Post2021_11_28, meta2021_11_28));

// create hash tags from posts
let set: Set<string> = new Set();
allPosts.forEach((post) => {
  post.tags.forEach((tag) => {
    set.add(tag);
  });
});
set.add("all");

export let hashTags = [...set];
