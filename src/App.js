import React, { Component } from "react";
import SearchResult from "./SearchResult/SearchResult";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";

class App extends Component {
constructor(){
  super();
  this.state = {
  };
}

getBeers(){

}


  render() {
    return (
      <div>
      <SearchBar/>
      <SearchResult />
      </div>
    );
  }
}

export default App;
