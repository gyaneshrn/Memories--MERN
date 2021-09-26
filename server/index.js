import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import postRouter from "./Router/posts.js";
import userRouter from "./Router/users.js";

import PostMessage from "./models/PostMessage.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);
app.use("/users", userRouter);

const CONNECTION_URL = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.vao7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server started successfully at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
// mongoose.set('useFindAndModify', false);
