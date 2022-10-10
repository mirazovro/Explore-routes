import React from "react";
import { Link } from "react-router-dom";
import "./Freind.css";
const Friend = ({ friend }) => {
  const { name, id, email, username } = friend;
  return (
    <div className="friend">
      <h2>name:{name}</h2>
      <p>Email:{email}</p>
      <p>
        Username: <Link to={`/friend/${id}`}>{username}</Link>{" "}
      </p>
    </div>
  );
};

export default Friend;
