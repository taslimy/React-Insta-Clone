import React, { Fragment } from "react";
import styled from "styled-components";
// import "./Post.css";

// # Style # //

const CardHead = styled.section`
  display: flex;
  align-items: center;
  height: 25px;
  padding: 25px;

  img {
    background: -webkit-linear-gradient(left top, crimson 0%, #f90 100%);
    border-radius: 50%;
    height: 50px;
    width: 50px;
    padding: 3px;
  }

  h4 {
    margin-left: 15px;
  }
`;

// # End Style # //

const PostHeader = props => {
  return (
    <Fragment>
      <CardHead>
        <img alt={props.username} src={props.thumbnailUrl} />
        <h4>{props.username}</h4>
      </CardHead>
    </Fragment>
  );
};

export default PostHeader;
