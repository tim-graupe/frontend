import React from "react";
import "../../styles/profile.css";
export const FriendsList = ({ props }) => {
  return (
    <div>
      {!props ? (
        <p>Loading....</p>
      ) : (
        <ul className="friends">
          <p className="friends-box-title">Friends ({props.length})</p>

          {props.map((friend) => {
            return (
              <li className="friend-list-friend-container" key={props._id + 1}>
                <img
                  src={friend.profile_pic}
                  alt="profile-pic"
                  className="friends-box-profile-pic "
                />

                <p>
                  {friend.firstName} {friend.lastName}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
