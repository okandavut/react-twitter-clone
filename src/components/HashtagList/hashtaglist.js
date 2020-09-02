import React from "react";
import "./hashtaglist.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

function HashtagList() {
  return (
    <div className="hashtag-list">
      <div className="hashtag-header">
        <span className="header-title">Trends for you</span>
        <span className="header-icon">
          <HomeRoundedIcon />
        </span>
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
