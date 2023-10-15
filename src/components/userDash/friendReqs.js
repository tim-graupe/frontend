import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navBar.css";
export const FriendReqs = ({ props }) => {
  const [friendReqs, setFriendReqs] = useState([]);
  const apiUrl = process.env.API_URL || "http://localhost:4000";

  useEffect(() => {
    const getFriendReqs = () => {
      if (props) {
        fetch(`http://localhost:4000/getFriendReqs/${props}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((res) => {
            setFriendReqs(res);
          });
      }
    };
    getFriendReqs();
  }, []);

  const acceptFriend = (friendRequest) => {
    fetch(`http://localhost:4000/acceptFriendReq/${friendRequest._id}`, {
      credentials: "include",
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RequestingFriendsId: friendRequest._id,
        currentUser: props,
        firstName: friendRequest.firstName,
        lastName: friendRequest.lastName,
      }),
    });
  };

  const rejectFriend = (friendRequest) => {
    fetch(`http://localhost:4000/rejectFriendReq/${friendRequest}`, {
      credentials: "include",
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RequestingFriendsId: friendRequest,
        currentUser: props,
      }),
    });
  };
  return (
    <ul className="friend-reqs-list">
      {friendReqs.map((friendRequest) => (
        <li key={friendRequest._id} className="friend-req-item">
          <Link to={`/user/${friendRequest._id}`}>
            <img
              className="friend-req-item-pic"
              src={friendRequest.profile_pic}
              alt="profile-pic"
            />
          </Link>

          <div className="friend-req-item-details">
            <p className="friend-req-item-name">
              {friendRequest.firstName} {friendRequest.lastName}
            </p>

            <div className="friend-req-item-buttons">
              <button
                onClick={() => acceptFriend(friendRequest)}
                className="accept-button"
              >
                Accept
              </button>
              <button
                onClick={() => rejectFriend(friendRequest._id)}
                className="reject-button"
              >
                Reject
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
