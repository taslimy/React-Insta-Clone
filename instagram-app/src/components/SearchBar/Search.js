import React, { Fragment } from "react";
import "./Search.css";

const Search =(props) => {
  return (
    // Dont wrap with a tags or href attribute This is NOT HTML.
    <Fragment>
      <header className="search-header">
        <nav>
          <section className="search-logo">
            <i class="fab fa-instagram fa-2x" />
          </section>

          <section className="search-input">
            <input
              type="text"
              onChange={props.searchPosts}
              placeholder=" Search"
            />
          </section>

          <section className="search-icons">
            <i className="far fa-compass fa-2x" />
            <i className="far fa-heart fa-2x" />
            <i className="far fa-user fa-2x" />
          </section>
        </nav>
      </header>
    </Fragment>
  );
};

export default Search;
