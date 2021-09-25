import React, { useEffect, useState } from "react";
import { Container, AppBar, Grid, Grow, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import memories from "./components/images/memories.png";
import Form from "./components/Form/Form";
import Post from "./components/Posts/Post/Post";
import Posts from "./components/Posts/Posts";

import useStyle from "./style.js";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    return () => {
      // cleanup;
    };
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="xl" spacing={4}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          height="60"
          alt="memories"
        ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContianer}
            container
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
