import React from "react";
import SvgTimelineProp from "../icons/TimelineProp";
import SvgMedia from "../icons/Media";
import SvgGif from "../icons/Gif";
import SvgQuestion from "../icons/Question";
import SvgEmoji from "../icons/Emoji";

import "./tweetsection.css";

function TweetSection() {
  return (
    <div className="tweet-section">
      <div className="tweet-header">
        <span className="tweet-title">Latest Tweets</span>
        <span className="tweet-icon">
          <SvgTimelineProp />
        </span>
      </div>
      <div className="send-tweet-section">
        <div className="simple-row">
          <div className="image-column">
            <img
              src="https://pbs.twimg.com/profile_images/1248539396065783808/gdMpvB-S_400x400.jpg"
              alt=""
              width="50px"
              height="50px"
              className="profile-image"
            ></img>
          </div>
          <div className="send-tweet-column">
            <input
              type="text"
              placeholder="What's Happening"
              className="send-tweet-box"
            ></input>
            <div className="create-tweet-section">
              <div className="icons">
                <div className="icon">
                  <span>
                    <SvgMedia />
                  </span>
                  <span>
                    <SvgGif />
                  </span>
                  <span>
                    <SvgQuestion />
                  </span>
                  <span>
                    <SvgEmoji />
                  </span>
                </div>
                <button type="button" className="tweet-send">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetSection;
