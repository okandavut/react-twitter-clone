import React from "react";

import './leftcontainer.css';

import Menu from "../../components/Menu/menu";
import TweetButton from "../../components/TweetButton/tweetbutton";

function LeftContainer() {
  return (
   <div className="left-container">
      <Menu/>
      <TweetButton/>
   </div>
  );
}

export default LeftContainer;
