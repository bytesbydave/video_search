import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="ui container top-contain">
        <SearchBar />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail />
            </div>
            <div className="six wide column">
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
