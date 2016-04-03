import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";

export const ROOT_URL = "http://reduxblog.herokuapp.com/api";

export const API_KEY = "?key=u238390902lj32kllk2jlk";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}
