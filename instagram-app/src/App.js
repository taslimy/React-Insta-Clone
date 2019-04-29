import React, { Fragment } from "react";
import "./App.css";
import dummyData from './dummy-data';
import Search from './components/SearchBar/Search'

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
       </>
      </div>
    );
  }
}

export default App;
