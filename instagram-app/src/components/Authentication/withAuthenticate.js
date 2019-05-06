import React, { Fragment, Component } from "react";
import Login from "../LoginPage/Login";

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: "",
        password: ""
      };
    }

    usernameHandler = event => {
      console.log(event.target.value);
      this.setState({
        // Value of what i'm typing.
        username: event.target.value
      });
    };

    passwordHandler = event => {
      console.log(event.target.value);
      this.setState({
        password: event.target.value
      });
    };

    handleLogin = event => {
      const user = this.state.username;
      event.preventDefault();
      this.setState({
        loggedIn: !this.state.loggedIn
      });
      localStorage.setItem("user", user);
    };

    render() {
      // console.log(this.state.loggedIn);
      return (
        <Fragment>
          {this.state.loggedIn ? <App /> : <Login
              username={this.usernameHandler}
              password={this.passwordHandler}
              login={this.handleLogin}
            />
          }
        </Fragment>
      );
    }
  };

export default Authenticate;
