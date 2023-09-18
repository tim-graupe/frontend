import React, { useState } from "react";
import { SearchUser } from "./searchUser";
import { FriendReqs } from "./userDash/friendReqs";
import "../styles/navBar.css";
export const NavBar = ({ props }) => {
  const [showFriendReqs, setShowFriendReqs] = useState(false);

  const handleFriendReqsHover = () => {
    setShowFriendReqs(true);
  };

  const handleFriendReqsLeave = () => {
    setShowFriendReqs(false);
  };

  return (
    <div className="nav-bar">
      <SearchUser />
      <a href="/home">Home</a>
      <a href={`/user/${props._id}`}>My Profile</a>
      <div
        className="friend-reqs-container"
        onMouseEnter={handleFriendReqsHover}
        onMouseLeave={handleFriendReqsLeave}
      >
        Friend Requests
        {showFriendReqs && <FriendReqs props={props} />}
      </div>
    </div>
  );
};
