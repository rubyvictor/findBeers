import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    return this.props.searchBeers(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search">
        <form>
          <input
            className="search-input"
            type="text"
            size="45"
            placeholder="  Enter a beer name.."
            onChange={this.handleChange.bind(this)}
            value={this.state.searchTerm}
          />
          <button type="submit" onClick={this.handleSubmit.bind(this)}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

// nice work with proptypes validation!
// given that searchBeers() is an essential function to this component (i.e. SearchBar won't work without this component, I would add a .isRequired property.)
SearchBar.propTypes = {
  searchBeers: PropTypes.func
};

export default SearchBar;
