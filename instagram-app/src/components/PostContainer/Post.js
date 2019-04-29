import React, { Fragment } from "react";
import PostHeader from "./PostHeader";
import "./Post.css";

const Post = (props)=> {
  return (
    <>
      <section className="card-info">
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
        <section className="card-img">
          <img src={props.post.imageUrl} />
          <section className="card-icon">
            <i class="far fa-heart fa-2x" />
            <i class="far fa-comment fa-2x" />
            <p>{props.post.likes} Likes </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Post;
