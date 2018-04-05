import React, { Component } from "react";
import SearchResult from "./SearchResult/SearchResult";
import "./App.css";

class App extends Component {
  render() {
    return <SearchResult />;
    // wrapping divs are not required if you're returning a single component
  }
}

export default App;
