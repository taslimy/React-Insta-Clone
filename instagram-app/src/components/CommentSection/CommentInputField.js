import React, { Fragment } from "react";
import moment from "moment";
import "./Comment.css";

const CommentInputField = props => {
  return (
    <Fragment>
      <span className="time-stamp">{moment().startOf("hour").fromNow()}</span>
      <form onSubmit={props.addComment}>
        <input
          type="text"
          placeholder="Add comment... "
          value={props.commentInput}
          name="commentInput"
          onChange={props.handleChanges}
        />
      </form>
    </Fragment>
  );
};

export default CommentInputField;
