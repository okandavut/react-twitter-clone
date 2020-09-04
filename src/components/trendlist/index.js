import React from "react";
import "./trendlist.css";
import SvgOptions from "../icons/Options";

function TrendList() {
  return (
    <div className="trend-list">
      <div className="trend-header">
        <span className="header-title">Trends for you</span>
        <span className="header-icon">
          <SvgOptions />
        </span>
      </div>
      <div className="trend-topic-container">
        <div className="trend-topic-row">
          <p className="trend-country">Trending in Netherlands</p>
          <p className="trend-topic">Marokkanen</p>
          <p className="trend-count">3,214 Tweets</p>
        </div>
        <div className="trend-topic-row">
          <p className="trend-country">Trending in Netherlands</p>
          <p className="trend-topic">#Spoedwet</p>
          <p className="trend-count">1,611 Tweet</p>
        </div>
        <div className="trend-topic-row">
          <p className="trend-country">Trending in Netherlands</p>
          <p className="trend-topic">Airbnb</p>
          <p className="trend-count">10.6K Tweets</p>
        </div>
        <div className="trend-topic-row">
          <p className="trend-country">Trending in Netherlands</p>
          <p className="trend-topic">Los Angeles</p>
          <p className="trend-count">90K Tweets</p>
        </div>
        <div className="trend-topic-row">
          <p className="trend-country">Trending in Netherlands</p>
          <p className="trend-topic">Joden</p>
          <p className="trend-count">1,525 Tweets</p>
        </div>
        <div className="show-more-row">
          <a href="0#" className="show-more-button">
            Show More
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrendList;
