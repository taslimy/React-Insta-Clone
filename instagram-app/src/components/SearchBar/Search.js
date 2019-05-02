import React, { Fragment } from "react";
import styled from "styled-components";

// # Style # //
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  height: 77px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
`;

const Logo = styled.section`
  display: flex;
  align-items: center;
  color: #242424;
  text-decoration: none;
`;

const InputSection = styled.section`
  font-family: FontAwesome;
  vertical-align: middle;
`;

const Input = styled.input`
  font-family: FontAwesome;
  min-width: 125px;
  letter-spacing: 0.5px;
  width: 215px;
  text-align: center;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  color: #242424;
`;

const IconSection = styled.section``;

const I = styled.i`
  letter-spacing: 20px;
  color: #242424;
  font-size: 1.5rem;
  text-decoration: none;
`;

// # End Style # //

const Search = props => {
  return (
    // Dont wrap with a tags or href attribute This is NOT HTML.
    <Fragment>
      <Wrapper>
        <Nav>
          <Logo>
            <i class="fab fa-instagram fa-2x" />
          </Logo>

          <InputSection>
            <Input
              type="text"
              onChange={props.searchPosts}
              placeholder="   Search"
            />
          </InputSection>

          <IconSection>
            <I className="far fa-compass fa-2x" />
            <I className="far fa-heart fa-2x" />
            <I className="far fa-user fa-2x" />
          </IconSection>
        </Nav>
      </Wrapper>
    </Fragment>
  );
};

export default Search;
