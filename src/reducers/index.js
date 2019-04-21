import {
  CHANGE_SEARCH_FIELD,
  REQUEST_VIDEOS_PENDING,
  REQUEST_VIDEOS_SUCCESS,
  REQUEST_VIDEOS_FAILED,
  SELECT_VIDEO
} from '../actions/types';

const initialStateSearch = {
  searchField: ''
};

const initialStateVideos = {
  isPending: false,
  error: '',
  videos: []
};

const initialStateSelectedVideo = {
  selectedVideo: null
}

export const searchVideos = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestVideos = (state = initialStateVideos, action = {}) => {
  switch (action.type) {
    case REQUEST_VIDEOS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_VIDEOS_SUCCESS:
      return { ...state, videos: action.payload, isPending: false };
    case REQUEST_VIDEOS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

export const selectVideo = (state=initialStateSelectedVideo, action={}) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return { ...state, selectedVideo: action.payload }
    default:
      return state;
  }
}
