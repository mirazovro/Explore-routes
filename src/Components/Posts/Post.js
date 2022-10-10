import React from "react";
import { useLoaderData } from "react-router-dom";
import Post1 from "../Post1/Post1";

const Post = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h3>Many fb posts are here</h3>
      {posts.map((post) => (
        <Post1 key={post.id} post={post}></Post1>
      ))}
    </div>
  );
};

export default Post;
