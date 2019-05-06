import React, { Fragment, Component } from "react";
import SearchBar from "../SearchBar/Search";
import styled from "styled-components";
import "./Login.css";

// Styled Component //
const LoginWrapper = styled.section`
  margin-top: 150px;
  max-width: 400px;
  height: auto;
  margin: 150px auto;
  border: 1px solid lightgray;
  text-align: center;
  background: #ffffff;
`;

const HeadingH1 = styled.h1`
  font-family: "billabongregular";
  font-size: 3.3rem;
  letter-spacing: 3px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding: 0 50px 50px 50px;
`;

const Input = styled.input`
  border: 1px solid lightgray;
  color: #999;
  background: #fafafa;
  height: 36px;
  padding-left: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ButtonSubmit = styled.button`
  margin-top: 25px;
  padding: 15px 30px;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  font-size: 14px;
  line-height: 18px;
  border-radius: 4px;
  color: #fff

    &:hover {
    cursor: pointer;
    opacity: 0.8;
    color: #fff;
  }
`;

// End Styled Component //

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <SearchBar />
        <LoginWrapper>
          <HeadingH1>Instagram Clone</HeadingH1>
          <Form>
            <Input
              type="name"
              name="name"
              placeholder="Username"
              onChange={this.props.username}
            />
            <Input
              type="name"
              name="name"
              placeholder="Password"
              onChange={this.props.password}
            />
            <ButtonSubmit onClick={this.props.login}>Log In</ButtonSubmit>
          </Form>
        </LoginWrapper>
      </Fragment>
    );
  }
}
export default Login;
