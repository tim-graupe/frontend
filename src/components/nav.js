import React, { useState } from "react";
import { SearchUser } from "./searchUser";
import { FriendReqs } from "./userDash/friendReqs";
import "../styles/navBar.css";

export const NavBar = ({ props }) => {
  const [showFriendReqs, setShowFriendReqs] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleShowFriendReqs = (e) => {
    setShowFriendReqs(!showFriendReqs);
    setClickPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="nav-bar">
      <SearchUser />
      <a href="/home">Home</a>
      <a href={`/user/${props._id}`}>My Profile</a>
      <div className="container" onClick={handleShowFriendReqs}>
        <span className="material-symbols-rounded">person_add</span>
        {props.incomingFriendRequests && (
          <div
            className="incoming-friend-requests-container"
            onClick={() => console.log("test")}
          >
            {props.incomingFriendRequests.length}
          </div>
        )}
      </div>
      {showFriendReqs && (
        <div className="incoming-friend-requests-container"></div>
      )}
      {showFriendReqs && <FriendReqs props={props._id} />}
      <a href="/log-out">Logout</a>
    </div>
  );
};
