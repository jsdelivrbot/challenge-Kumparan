import { FETCH_POSTS, FETCH_USERS, FETCH_PHOTOS, FETCH_COMMENTS, FETCH_POSTSUSERS } from '../actions/index';
const INITIAL_STATE = { all: [], posts: null, photos: null, postsUser: null, abc: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, all: action.payload.data };
    case FETCH_POSTS:
      return { ...state, posts: action.payload.data };
    case FETCH_PHOTOS:
      return { ...state, photos: action.payload.data };
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload.data };
    case FETCH_POSTSUSERS:
      return { ...state, postsUser: action.payload.data };
    default:
      return state;
  }
}