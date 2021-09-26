import express from "express";
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likedPost,
} from "../controller/posts.js";
import auth from "../Router/users.js";
const router = express.Router();

router.get("/", getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id/delete", auth, deletePost);
router.patch("/:id/like", auth, likedPost);

export default router;
