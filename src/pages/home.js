import React from "react";
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
    <div className="container">
      <div className="row">
        <div className="column left-side">
          <img
            src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
            alt=""
            width="40"
            height="40"
            className="home-logo"
          />
          <Menu />
          <TweetButton />
        </div>

        <div className="column mid-side">
          <TweetSection />
          <TweetList />
        </div>

        <div className="column right-side">
          <SearchBox />
          <TrendList />
        </div>
      </div>
    </div>
  );
}

export default Home;
