import {
  CHANGE_SEARCH_FIELD,
  REQUEST_VIDEOS_PENDING,
  REQUEST_VIDEOS_SUCCESS,
  REQUEST_VIDEOS_FAILED,
  SELECT_VIDEO
} from './types';
import youtube from '../api/youtube';

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestVideos = term => async dispatch => {
  dispatch({ type: REQUEST_VIDEOS_PENDING });
  try {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        type: 'video'
      }
    });
    const videos = response.data.items;
    dispatch({ type: REQUEST_VIDEOS_SUCCESS, payload: videos });
    dispatch({ type: SELECT_VIDEO, payload: videos[0] });
  } catch (err) {
    dispatch({ type: REQUEST_VIDEOS_FAILED, payload: err });
  }
};

export const selectVideo = video => {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
};
