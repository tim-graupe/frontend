import React from "react";

export const FriendsList = ({ props }) => {
  return (
    <div className="friends-container">
      {!props ? (
        <p>Loading....</p>
      ) : (
        <div className="friends">
          <p>Friends ({props.length})</p>

          {props.map((friend) => {
            <div className="dashboard-friend-container">
              <img
                src={friend.profile_pic}
                alt="profile-pic"
                className="friends-box-profile-pic "
              />

              <p>
                {friend.firstName} {friend.lastName}
              </p>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};
