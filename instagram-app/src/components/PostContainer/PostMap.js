import React, { Fragment } from "react";
import Post from "./Post";
import styled from "styled-components";
// import "./Post.css";

// # Style # //

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
  max-width: 614px;
`;

// # End Style # //

const PostMap = props => {
  return (
    <Fragment>
      <Wrapper>
        {props.posts.map(e => (
          <Post key={e.imageUrl} post={e} />
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default PostMap;
