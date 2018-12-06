import React from 'react';
import './VideoDetail.css';

function facebook(url) {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`
}

function twitter(url) {
  return `https://twitter.com/home?status=${url}`
}

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>Loading...</div>
    );
  }

  const videoShare = `https://youtu.be/${video.id.videoId}`
  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSRC} title="video player" />
      </div>
      <div className="ui segment detail-contain">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <div>
          <a href={facebook(videoShare)}>
            <button className="ui facebook button">
              <i className="facebook icon"></i>
              Facebook
            </button>
          </a>
          <a href={twitter(videoShare)} >
            <button className="ui twitter button">
              <i className="twitter icon"></i>
              Twitter
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;