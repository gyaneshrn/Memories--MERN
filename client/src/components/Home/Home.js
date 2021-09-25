import React, { useEffect, useState } from "react";
import { Container, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import useStyle from "./HomeStyle";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

export const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    return () => {
      // cleanup;
    };
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContianer}
          container
          justifyContent="space-evenly"
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
  );
};
export default Home;
