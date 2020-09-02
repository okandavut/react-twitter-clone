import React from "react";
import "./hashtaglist.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import Grid from "@material-ui/core/Grid";

function HashtagList() {
  return (
    <div className="hashtag-list">
      <div className="hashtag-header">
        <h2>Trends for you</h2>
        <HomeRoundedIcon />
      </div>
      <div className="trend-topic-container">
        <p className="trend-country">Trending in Netherlands</p>
        <p className="trend-topic">Los Angeles</p>
        <p className="trend-count">90K Tweets</p>
      </div>
      <div className="trend-topic-container">
        <p className="trend-country">Trending in Netherlands</p>
        <p className="trend-topic">Los Angeles</p>
        <p className="trend-count">90K Tweets</p>
      </div>
      <div className="trend-topic-container">
        <p className="trend-country">Trending in Netherlands</p>
        <p className="trend-topic">Los Angeles</p>
        <p className="trend-count">90K Tweets</p>
      </div>
      <div className="trend-topic-container">
        <p className="trend-country">Trending in Netherlands</p>
        <p className="trend-topic">Los Angeles</p>
        <p className="trend-count">90K Tweets</p>
      </div>
      <div className="trend-topic-container">
        <p className="trend-country">Trending in Netherlands</p>
        <p className="trend-topic">Los Angeles</p>
        <p className="trend-count">90K Tweets</p>
      </div>
      <div className="show-more">
        <a href="#" className="show-more-button">
          Show More
        </a>
      </div>
    </div>
  );
}

export default HashtagList;
