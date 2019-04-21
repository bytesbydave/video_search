import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';
import { requestVideos, setSearchField, selectVideo } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.onTermSubmit('coffee');
  }

  render() {
    const {
      searchField,
      onSearchChange, onTermSubmit,
      videos,
      onVideoSelect,
      selectedVideo
    } = this.props;
    return (
      <div className="ui container top-contain">
        <SearchBar
          onTermSubmit={onTermSubmit}
          onSearchChange={onSearchChange}
          searchField={searchField}
        />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: state.requestVideos.videos,
    isPending: state.requestVideos.isPending,
    error: state.requestVideos.error,
    searchField: state.searchVideos.searchField,
    selectedVideo: state.selectVideo.selectedVideo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTermSubmit: event => dispatch(requestVideos(event)),
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onVideoSelect: event => dispatch(selectVideo(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
