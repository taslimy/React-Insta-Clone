import React, { Fragment } from "react";
import PostHeader from "./PostHeader";
import CommentContainer from '../CommentSection/CommentContainer';
import "./Post.css";

const Post = (props)=> {
  return (
    <Fragment>
      <section className="card-info">
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
        <section className="card-img">
          <img alt={props.post.username} src={props.post.imageUrl} />
          <section className="card-icon">
            <i class="far fa-heart fa-2x" />
            <i class="far fa-comment fa-2x" />
            <p>{props.post.likes} Likes </p>
            <CommentContainer comments={props.post.comments} />
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default Post;
