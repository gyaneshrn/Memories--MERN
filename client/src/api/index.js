import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPosts = (newPost) => axios.post(url, newPost);

export const updatePosts = (id, updatePost) =>
  axios.patch(`${url}/${id}`, updatePost);

export const deletePosts = (id) => axios.delete(`${url}/${id}/delete`);

export const likePosts = (id) => axios.patch(`${url}/${id}/like`);
