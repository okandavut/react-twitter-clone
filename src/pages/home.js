import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import LeftContainer from "../containers/LeftContainer/leftcontainer";
import RightContainer from "../containers/RightContainer/rightcontainer";
import MainContainer from "../containers/MainContainer/maincontainer";
import TweetContainer from "../containers/TweetContainer/tweetcontainer";
import SearchBox from "../components/SearchBox/searchbox";

function Home() {
  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          Logo comes here
        </Grid>
        <Grid item xs={6} sm={6}>
          <TweetContainer />
        </Grid>
        <Grid item xs={6} sm={3}>
          <SearchBox />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <LeftContainer />
        </Grid>
        <Grid item xs={6} sm={6}>
          <MainContainer />
        </Grid>
        <Grid item xs={6} sm={3}>
          <RightContainer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
