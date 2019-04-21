import React from 'react';
import VideoItem from './VideoItem';
import { connect } from 'react-redux';

const VideoList = ({ videos, isPending, error }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} key={video.id.videoId} />;
  });

  if (isPending) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>error</div>;
  } else {
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
};

const mapStateToProps = state => {
  return {
    videos: state.requestVideos.videos,
    isPending: state.requestVideos.isPending,
    error: state.requestVideos.error
  };
};

export default connect(mapStateToProps)(VideoList);
