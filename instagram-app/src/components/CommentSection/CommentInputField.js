import React, { Fragment } from "react";
import moment from "moment";
import styled from "styled-components";
// import "./Comment.css";

const TimeStamp = styled.span`
  text-transform: uppercase;
  color: gray;
  font-size: 13px;
`;

const FormSection = styled.section`

form {
  border: none;
  margin-top: 10px;
  border-top: 1px solid lightgray;
  padding: 5px;

  input {
  margin-top: 10px;
  border: none;

  input::placeholder {
  font-size: 15px
}`;

const CommentInputField = props => {
  return (
    <Fragment>
      <FormSection>
        <TimeStamp className="time-stamp">
          {moment()
            .startOf("hour")
            .fromNow()}
        </TimeStamp>
        <form onSubmit={props.addComment}>
          <input
            type="text"
            placeholder="Add comment... "
            value={props.commentInput}
            name="commentInput"
            onChange={props.handleChanges}
          />
        </form>
      </FormSection>
    </Fragment>
  );
};

export default CommentInputField;
