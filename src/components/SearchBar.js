import React from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';

class SearchBar extends React.Component {
  // state = { term: '' };

  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value });
  // };

  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.onFormSubmit(this.state.term);
  // };

  render() {
    const { searchField, onSearchChange, onTermSubmit } = this.props;
    return (
      <div className="search-bar ui segment search-bar-contain">
        <div className="ui form">
          <div className="field">
            <input
              placeholder="Search"
              className="input-search"
              type="text"
              value={searchField}
              onChange={onSearchChange}
            />
            <div className="search-contain">
              <button
                onClick={() => onTermSubmit(searchField)}
                value={searchField}
                className="ui primary button search-btn"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
