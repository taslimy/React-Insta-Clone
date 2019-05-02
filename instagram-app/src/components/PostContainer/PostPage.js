import React, { Fragment, Component } from "react";
import dummyData from "../../dummy-data";
import "../../App.css";
import Search from "../SearchBar/Search";
import PostMap from "../PostContainer/PostMap";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchValue: ""
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostsHandler = event => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="App">
          <Fragment>
            <Search searchPosts={this.searchPostsHandler} />
            {/* // MDN
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            // The filter() method creates a new array with all elements
            that pass the test implemented by the provided function. // MDN
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
            //The includes() method determines whether an array includes a
            certain value among its entries, returning true or false as
            appropriate. */}
            <PostMap
              posts={this.state.posts.filter(post => {
                return post.username.includes(this.state.searchValue);
              })}
            />
          </Fragment>
        </div>
      </Fragment>
    );
  }
}

export default PostPage;
