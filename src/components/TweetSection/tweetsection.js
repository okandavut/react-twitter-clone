import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SendTweet from "../SendTweet/sendtweet";

import "./tweetsection.css";

function TweetSection() {
  return (
    <div className="tweet-section">
      <div className="tweet-header">
        <span className="tweet-title">Home</span>
        <span className="tweet-icon">
          <HomeRoundedIcon />
        </span>
      </div>
      {/* <div className="send-tweet-section">
        <SendTweet />
      </div> */}
    </div>
  );
}

export default TweetSection;
