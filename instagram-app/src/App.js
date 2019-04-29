import React, { Fragment } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import Search from "./components/SearchBar/Search";
import PostMap from "./components/PostContainer/PostMap";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <>
          <Search />
          <PostMap posts={this.state.posts} />
        </>
      </div>
    );
  }
}

export default App;
