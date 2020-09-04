import React from "react";
import "./navigation.css";
import SvgHome from "../icons/Home";
import SvgMore from "../icons/More";
import SvgProfile from "../icons/Profile";
import SvgLists from "../icons/Lists";
import SvgBookmark from "../icons/Bookmark";
import SvgMessages from "../icons/Messages";
import SvgNotification from "../icons/Notification";
import SvgExplore from "../icons/Explore";

function Menu() {
  return (
    <div className="navigation-container">
      <ul className="navigation">
        <li>
          <SvgHome />
          <div className="navigationItem"> Home</div>
        </li>
        <li>
          <SvgExplore />
          <div className="navigationItem"> Explore</div>
        </li>
        <li>
          <SvgNotification />
          <div className="navigationItem"> Notifications</div>
        </li>
        <li>
          <SvgMessages />
          <div className="navigationItem"> Messages</div>
        </li>
        <li>
          <SvgBookmark />
          <div className="navigationItem"> Bookmarks</div>
        </li>
        <li>
          <SvgLists />
          <div className="navigationItem"> Lists</div>
        </li>
        <li>
          <SvgProfile />
          <div className="navigationItem"> Profile</div>
        </li>
        <li>
          <SvgMore />
          <div className="navigationItem"> More</div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
