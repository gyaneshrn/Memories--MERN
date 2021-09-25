import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardContent,
} from "@material-ui/core";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizonIcon from "@material-ui/icons/MoreHoriz";
import { deletePost, likePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";
import useStyle from "./style";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost(post._id));
  };
  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };
  const classes = useStyle();
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        ></CardMedia>
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
            }}
          >
            <MoreHorizonIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags?.map((tag) => `#${tag}`)}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          variant="h5"
          color="secondary"
          gutterBottom
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={handleLike}>
            <ThumbUpAltIcon fontSize="small" />
            &nbsp; Like &nbsp;
            {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={handleDelete}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
