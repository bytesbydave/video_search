import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment search-bar-contain">
        <form className="ui form" onSubmit={this.onFormSubmit} >
          <div className="field">
            <input 
              placeholder="Search"
              className="input-search"
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <div className="search-contain">
              <button className="ui primary button search-btn">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;