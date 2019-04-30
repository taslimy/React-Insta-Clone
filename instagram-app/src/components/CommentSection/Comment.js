import React, { Fragment } from "react";
import {string, shape} from "prop-types";
import "./Comment.css";

const Comment = (props) => {
  return (
    <Fragment>
      <article className="comment-container">
        <span className="username">{props.comment.username} </span>
        <span className="user-comment">{props.comment.text}</span>
      </article>
    </Fragment>
  );
};

Comment.propTypes = {
  comment: shape({
    text: string,
    username: string
  })
};

export default Comment;
