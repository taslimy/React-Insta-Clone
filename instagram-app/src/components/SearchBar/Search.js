import React, { Fragment } from 'react';
import "./Search.css"

const Search = (props) => {
  return (
    <>
      <header className="search-header">
        <nav>
          <section className="search-logo">
            <a href="#"><i class="fab fa-instagram fa-2x" /></a>
          </section>

          <section className="search-input">
            <input type="text" placeholder="  Search" />
          </section>

          <section className="search-icons">
           <a href=""> <i className="far fa-compass fa-2x" /></a>
           <a href=""><i className="far fa-heart fa-2x" /></a>
           <a href=""><i className="far fa-user fa-2x" /></a>
          </section>
        </nav>
      </header>
    </>
  );
}

export default Search;

