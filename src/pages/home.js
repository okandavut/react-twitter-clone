import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import './home.css';
import LeftContainer from "../containers/LeftContainer/leftcontainer";
import RightContainer from "../containers/RightContainer/rightcontainer";
import MainContainer from "../containers/MainContainer/maincontainer";
import TweetContainer from "../containers/TweetContainer/tweetcontainer";
import SearchBox from "../components/SearchBox/searchbox";

function Home() {
  return (
    <div >
      <Container maxWidth="lg">
        <Grid container spacing={3} >
          <Grid
            item
            xs={12}
            sm={3}
            container
            spacing={0}
            direction="column"
            alignItems="flex-start"
            className="right-line"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
              alt=""
              width="40"
              height="40"
              className="home-logo"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TweetContainer />
          </Grid>
          <Grid item xs={12} sm={3} className="left-line">
            <SearchBox />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} className="right-line">
            <LeftContainer  />
          </Grid>
          <Grid item xs={12} sm={6}  className="top-line">
            <MainContainer />
          </Grid>
          <Grid item xs={12} sm={3} className="left-line">
            <RightContainer />
          </Grid>
        </Grid>
        </Container>
    </div>
  );
}

export default Home;
