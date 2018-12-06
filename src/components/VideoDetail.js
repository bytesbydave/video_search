import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>Loading...</div>
    );
  }

  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSRC} title="video player" />
      </div>
      <div className="ui segment detail-contain">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;