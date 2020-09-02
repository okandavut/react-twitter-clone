import React from "react";

import "./tweetlist.css";

function TweetList() {
  return (
    <div className="tweet-list-section">
      <div className="tweet-list">
        <div className="tweet-profile-image">
          <img
            src="https://pbs.twimg.com/profile_images/1248539396065783808/gdMpvB-S_400x400.jpg"
            alt=""
            width="50px"
            height="50px"
            className="profile-image"
          ></img>
        </div>
        <div className="tweet">
          <div className="tweet-username">Okan DAVUT</div>
          <div className="tweet-text">
            Fu*ck you 2020. R.I.P Chadwick Boseman, WAKANDA FOREVER
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default TweetList;
