import React from "react";

export const FriendsList = ({ props }) => {
  return (
    <section className="friends-container">
      <p>{props.incomingFriendRequests.length}</p>
      {/* <p> You have {props.friends.length} friends.</p> */}
    </section>
  );
};
