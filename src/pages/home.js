import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import "./home.css";

import Menu from "../components/navigation";
import TweetButton from "../components/button";
import TweetSection from "../components/tweetsection";
import SearchBox from "../components/searchbox";
import TrendList from "../components/trendlist";
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
          <Grid item xs={12} sm={5}>
            <TweetSection />
          </Grid>
          <Grid item xs={12} sm={4} className="left-line">
            <SearchBox />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} className="right-line">
            <Menu />
            <TweetButton />
          </Grid>
          <Grid item xs={12} sm={5} className="top-line">
            <TweetList />
          </Grid>
          <Grid item xs={12} sm={4} className="left-line">
            <TrendList />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
