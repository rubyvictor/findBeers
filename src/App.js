import React, { Component } from "react";
import BeersPage from "./BeersPage/BeersPage";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
      <SearchBar/>
      <BeersPage />
      </div>
    );
  }
}

export default App;
