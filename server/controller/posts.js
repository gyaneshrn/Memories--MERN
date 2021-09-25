import PostMessage from "../models/PostMessage.js";
import mongoose from "mongoose";
export const getPost = async (req, res) => {
  try {
    const post = await PostMessage.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const body = req.body;
    const newPost = await new PostMessage(body).save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const post = req.body;
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "Invalid Object Id" });

  try {
    const newPost = await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    );
    res.status(200).json(newPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "Invalid Object Id" });

  try {
    const newPost = await PostMessage.findByIdAndRemove(_id);
    res.status(200).json({ newPost });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const likedPost = async (req, res) => {
  const { id: _id } = req.params;
  console.log(">>> like req", _id);
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "Invalid Object Id" });

  try {
    const post = await PostMessage.findById(_id);
    const newPost = await PostMessage.findByIdAndUpdate(
      _id,
      {
        likeCount: post.likeCount + 1,
      },
      {
        new: true,
      }
    );
    // console.log("updated like post:::::>>>", newPost);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
