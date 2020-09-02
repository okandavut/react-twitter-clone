import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import "./home.css";

import Menu from "../components/menu";
import TweetButton from "../components/button";
import TweetSection from "../components/tweetsection";
import SearchBox from "../components/searchbox";
import HashtagList from "../components/trendlist";
import TweetList from "../components/list";

function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
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
            <TweetSection />
          </Grid>
          <Grid item xs={12} sm={3} className="left-line">
            <SearchBox />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} className="right-line">
            <Menu />
            <TweetButton />
          </Grid>
          <Grid item xs={12} sm={6} className="top-line">
            <TweetList />
          </Grid>
          <Grid item xs={12} sm={3} className="left-line">
            <HashtagList />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
