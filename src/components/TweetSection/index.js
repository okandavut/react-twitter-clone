import React from "react";
import SvgTimelineProp from "../icons/TimelineProp"
import SendTweet from "../sendtweet";

import "./tweetsection.css";

function TweetSection() {
  return (
    <div className="tweet-section">
      <div className="tweet-header">
        <span className="tweet-title">Home</span>
        <span className="tweet-icon">
          <SvgTimelineProp />
        </span>
      </div>
      <div className="send-tweet-section">
        <SendTweet />
      </div>
    </div>
  );
}

export default TweetSection;
