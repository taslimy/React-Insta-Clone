import React, { Fragment } from "react";
import moment from "moment";
import './Comment.css';

const CommentInputField = () => {
  return (
    <Fragment>
      <span className="time-stamp">{ moment().startOf('hour').fromNow() }</span>
    <form>
      <input type="text" placeholder="Add an comment....... " />
    </form>
    </Fragment>
  );
};

export default CommentInputField;
