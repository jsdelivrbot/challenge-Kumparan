import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_POSTSUSERS = 'FETCH_POSTSUSERS';
export const DELETE_POST = 'DELETE_POST';
// export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users`);
  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function fetchPosts(id) {
  const request = axios.get(`${ROOT_URL}/posts?userId=${id}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchPostUsers(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);
  return {
    type: FETCH_POSTSUSERS,
    payload: request
  };
}

export function fetchPhotos(id) {
  const request = axios.get(`${ROOT_URL}/photos?userId=${id}`);

  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}
export function fetchComment(id) {
  const request = axios.get(`${ROOT_URL}/comments?postId=${id}`);
  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}
export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts?userId=${id}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}