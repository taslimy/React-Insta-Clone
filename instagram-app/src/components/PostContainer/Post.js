import React, { Fragment, Component } from "react";
import PostHeader from "./PostHeader";
import CommentContainer from "../CommentSection/CommentContainer";
import notFull from "../../asset/heart-regular.svg";
import fullHeart from "../../asset/heart-solid.svg";
// import PostPage from './PostPage'
import "./Post.css";

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
      <img
        className="image-heart"
        onClick={this.addLikeHandler}
        src={notFull}
        alt="Not Selected"
      />
    );

    const clickedHeart = (
      <img
        className="image-heart"
        onClick={this.addLikeHandler}
        src={fullHeart}
        alt="Selected"
      />
    );

    return (
      <Fragment>
        <section className="card-info">
          <PostHeader
            username={this.props.post.username}
            thumbnailUrl={this.props.post.thumbnailUrl}
          />
          <section className="card-img">
            <img
              alt={this.props.post.username}
              src={this.props.post.imageUrl}
            />
            <section className="card-icon">
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
            </section>
          </section>
          {/* <PostPage /> */}
        </section>
      </Fragment>
    );
  }
}

export default Post;
