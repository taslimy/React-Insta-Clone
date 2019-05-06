import React, { Fragment } from "react";
import {string, shape} from "prop-types";
import styled from 'styled-components';
// import "./Comment.css";

// # Style # //

const CommentContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const SpanUsername = styled.span`
  font-weight: bold;
  font-size: 15px;
  margin: 0px 5px 5px 0px;
`;

const SpanComment = styled.span`
  font-size: 15px;
`;

// # End Style # //

const Comment = (props) => {
  return (
    <Fragment>
      <CommentContainer>
        <SpanUsername>{props.comment.username} </SpanUsername>
        <SpanComment className="user-comment">{props.comment.text}</SpanComment>
      </CommentContainer>
    </Fragment>
  );
};

Comment.propTypes = {
  comment: shape({
    username: string,
    text: string,
  })
};

export default Comment;
