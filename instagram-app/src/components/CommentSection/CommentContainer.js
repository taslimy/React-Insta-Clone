import React, { Fragment, Component } from "react";
import { shape, arrayOf, string } from "prop-types";
import Comment from "./Comment";
import CommentInputField from "./CommentInputField";

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <Fragment>
        {this.state.comments.map((e, i) => {
          return <Comment key={i} comment={e} />;
        })}
        <CommentInputField />
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
