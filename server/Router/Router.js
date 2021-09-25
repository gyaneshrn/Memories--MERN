import express from "express";
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likedPost,
} from "../controller/posts.js";
const router = express.Router();

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id/delete", deletePost);
router.patch("/:id/like", likedPost);

export default router;
