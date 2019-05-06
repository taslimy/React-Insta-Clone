import React from "react";
import "./App.css";
import PostPage from "./components/PostContainer/PostPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
const ComponentFromWithAuthenticate = withAuthenticate(PostPage)

const App = () => {
  return (
    <>
      <ComponentFromWithAuthenticate />
    </>
  );
};

export default App;
