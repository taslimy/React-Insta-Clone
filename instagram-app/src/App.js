import React from "react";
import "./App.css";
import PostPage from "./components/PostContainer/PostPage";
import Login from "./components/LoginPage/Login";
import Authenticate from "./components/Authentication/withAuthenticate";

const App = () => {
  return (
    <>
      <PostPage />
    </>
  );
};

export default Authenticate(App)(Login);
