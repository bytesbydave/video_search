import React from 'react';
import { connect } from 'react-redux';
import { requestVideos, setSearchField } from '../actions';
import './SearchBar.css';

class SearchBar extends React.Component {
  componentDidMount() {
    this.props.onTermSubmit('coffee');
  }

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

const mapStateToProps = state => {
  return {
    searchField: state.searchVideos.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTermSubmit: event => dispatch(requestVideos(event)),
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
