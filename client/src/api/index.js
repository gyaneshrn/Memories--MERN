import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000 " });

export const fetchPosts = () => API.get("/posts");

export const createPosts = (newPost) => API.post("/posts", newPost);

export const updatePosts = (id, updatePost) =>
  API.patch(`/posts/${id}`, updatePost);

export const deletePosts = (id) => API.delete(`/posts/${id}/delete`);

export const likePosts = (id) => API.patch(`/posts/${id}/like`);

export const signin = (formData) => API.post(`/users/signin`, formData);
export const signup = (formData) => API.post(`/users/signup`, formData);
