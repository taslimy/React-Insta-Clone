import React, { Fragment } from "react";
import "./Post.css";

const PostHeader = (props) => {
  return (
    <Fragment>
      <section className="card-head">
        <img alt={props.username} src={props.thumbnailUrl} />
        <h4>{props.username}</h4>
      </section>
    </Fragment>
  );
};

export default PostHeader;
