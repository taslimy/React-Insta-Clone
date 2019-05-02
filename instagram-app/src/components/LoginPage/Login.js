import React, { Fragment, Component } from "react";
import SearchBar from "../SearchBar/Search";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Fragment>
        <SearchBar />
        <section className="login-section">
          <h1>Instagram Clone</h1>
          <span role="img">🤷‍♂</span>
          <form className="form-section">
            <input onChange={this.props.username} type="text" placeholder="Username" name="username" />
            <input onChange={this.props.password} type="password" placeholder="Password" name="password" />
            <button onClick={this.props.changeShit}>Log In</button>
          </form>
        </section>
      </Fragment>
    );
  }
}
export default Login;
