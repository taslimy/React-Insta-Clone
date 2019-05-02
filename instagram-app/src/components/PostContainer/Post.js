import React, { Fragment, Component } from "react";
import PostHeader from "./PostHeader";
import CommentContainer from "../CommentSection/CommentContainer";
import notFull from "../../asset/heart-regular.svg";
import fullHeart from "../../asset/heart-solid.svg";
import styled from "styled-components";
// import PostPage from './PostPage'
// import "./Post.css";

// # Style # //

const FullWidth = styled.img`
  width: 100%;
`;

const CardImg = styled.section`
  height: 100%;
  width: 100%;
`;

const CardIcon = styled.section`
  padding: 15px;

  p {
    font-weight: normal;
    font-size: 13px;
  }

  i {
    outline: 0;
    margin-right: 15px;
  }
`;

const ImageHeart = styled.img`
  transition: transform 0.2s; /* Animation */
  font-weight: normal;
  cursor: pointer;
  width: 25px;

  :hover {
    transform: scale(1.5);
  }
`;

const CardInfo = styled.section`
  border: 1px solid lightgray;
  margin: 5px 0;
  border: 1px solid lightgray;
  margin-bottom: 50px;
  background: white;
`;

// # End Style # //

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeClicked: false,
      likeTotal: this.props.post.likes
    };
  }

  addLikeHandler = event => {
    event.preventDefault();
    this.setState({
      likeClicked: !this.state.likeClicked
    });
  };

  render() {
    const blankHeart = (
      <ImageHeart
        onClick={this.addLikeHandler}
        src={notFull}
        alt="Not Selected"
      />
    );

    const clickedHeart = (
      <ImageHeart
        className="image-heart"
        onClick={this.addLikeHandler}
        src={fullHeart}
        alt="Selected"
      />
    );

    return (
      <Fragment>
        <CardInfo>
          <PostHeader
            username={this.props.post.username}
            thumbnailUrl={this.props.post.thumbnailUrl}
          />
          <CardImg>
            <FullWidth
              alt={this.props.post.username}
              src={this.props.post.imageUrl}
            />
            <CardIcon>
              {/* When Heart is clicked on and off It will toggle my const values clickedHeart : blankHeart */}
              {this.state.likeClicked ? clickedHeart : blankHeart}
              {/* Adds a like and removes a Like */}
              {this.state.likeClicked ? (
                <p> {this.props.post.likes + 1} Likes</p>
              ) : (
                <p>{this.props.post.likes} Likes</p>
              )}
              <CommentContainer comments={this.props.post.comments} />
              {/* <i onClick={this.addLikeHandler} class="far fa-heart fa-2x" /> */}
              {/* <i class="far fa-comment fa-2x" /> */}
              {/* <p>{this.state.likeTotal} Likes </p> */}
            </CardIcon>
          </CardImg>
          {/* <PostPage /> */}
        </CardInfo>
      </Fragment>
    );
  }
}

export default Post;
