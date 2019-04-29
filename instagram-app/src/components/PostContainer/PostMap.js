import React, { Fragment } from "react";
import Post from "./Post";
import "./Post.css";

const PostMap = (props)=> {
  return (
    <>
    <section className="card-container">
      {props.posts.map(e => (
        <Post key={e.imageUrl} post={e} />
      ))}
    </section>
    </>
  );
};

export default PostMap;
