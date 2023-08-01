import React from "react";

export const NavBar = ({ props }) => {
  return (
    <div className="nav-bar">
      <p>Welcome back, {props.firstName}!</p>

      {props.incomingFriendRequests.length}
    </div>
  );
};
