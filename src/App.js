import React, { Component } from "react";
import SearchResult from "./SearchResult/SearchResult";
import "./App.css";

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
      <SearchResult />
      </div>
    );
  }
}

export default App;
