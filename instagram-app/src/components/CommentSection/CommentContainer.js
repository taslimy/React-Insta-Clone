import React, { Fragment, Component } from "react";
import { shape, arrayOf, string } from "prop-types";
import Comment from "./Comment";
import CommentInputField from "./CommentInputField";
import moment from "moment";

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentInput: ""
    };
  }

  addComment = event => {
    event.preventDefault();
    const username = localStorage.getItem("user");
    const newComment = {
      username: username,
      text: this.state.commentInput,
      timestamp: moment().format("M/D/YYYY, h:mm:ss a")
    };

    //  Spread the existing array adding the new comment
    this.setState({
      comments: [...this.state.comments, newComment],
      commentInput: ""
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <Fragment>
        {this.state.comments.map((e, i) => {
          return <Comment key={i} comment={e} />;
        })}
        <CommentInputField
          addComment={this.addComment}
          commentInput={this.state.commentInput}
          handleChanges={this.handleChanges}
        />
      </Fragment>
    );
  }
}

CommentContainer.propTypes = {
  comments: arrayOf(
    shape({
      text: string,
      username: string
    })
  )
};

export default CommentContainer;
