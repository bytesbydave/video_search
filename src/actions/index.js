import {
  CHANGE_SEARCH_FIELD,
  REQUEST_VIDEOS_PENDING,
  REQUEST_VIDEOS_SUCCESS,
  REQUEST_VIDEOS_FAILED
} from './types';
import youtube from '../api/youtube';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

export const requestVideos = (term) => async dispatch => {
  dispatch({ type: REQUEST_VIDEOS_PENDING })
  try {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    dispatch({ type: REQUEST_VIDEOS_SUCCESS, payload: response.data })
  } catch (err) {
    dispatch({ type: REQUEST_VIDEOS_FAILED, payload: err})
  }
}