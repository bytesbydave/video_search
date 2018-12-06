import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0] 
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit('programming');
  }

  render() {
    return (
      <div className="ui container top-contain">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;