import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./post1.css";

const Post1 = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <p>{title}</p>
      <p>{body}</p>

      <Link to={`/post/${id}`}>
        <button>Show details</button>
      </Link>
      <Link to={`/post/${id}`}>Visit:{id}</Link>
      <button onClick={handleNavigate}>details again</button>
    </div>
  );
};

export default Post1;
