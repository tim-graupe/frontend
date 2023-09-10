import React from "react";

export const FriendsList = ({ props }) => {
  return (
    <section className="friends-container">
      <p>Friends</p>
      {props.map((friend) => {
        return (
          <div className="dashboard-friend-container">
            <img
              src={friend.profile_pic}
              alt="profile-pic"
              className="dashboard-friend-container-profile-pic"
            />

            <p>
              {friend.firstName} {friend.lastName}
            </p>
          </div>
        );
      })}
    </section>
  );
};
