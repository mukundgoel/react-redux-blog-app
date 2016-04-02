import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";

export const ROOT_URL = "http://reduxblog.herokuapp.com/api";

export const API_KEY = "?key=u238390902lj32kllk2jlk";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}