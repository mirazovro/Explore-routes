import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body, userId } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };
  return (
    <div>
      <h2>details about post: {id}</h2>
      <h2> {title}</h2>
      <h2>{body}</h2>
      <button onClick={handleNavigate}>Get the author</button>
    </div>
  );
};

export default PostDetails;
