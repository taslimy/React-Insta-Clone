import React, { Fragment, Component } from "react";
import SearchBar from "../SearchBar/Search";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <Fragment>
        <SearchBar />
        <section className="login-section">
          <h1>Instagram clone</h1>
          <form className="form-section">
            <input
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
            />
            <button>Log In</button>
          </form>
        </section>
      </Fragment>
    );
  }
}
export default Login;
