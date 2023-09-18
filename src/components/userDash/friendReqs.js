import React, { useState, useEffect } from "react";

export const FriendReqs = ({ props }) => {
  const [friendReqs, setFriendReqs] = useState([]);

  useEffect(() => {
    const getFriendReqs = () => {
      if (props) {
        fetch(
          `https://backend-production-f695.up.railway.app/getFriendReqs/${props}`,
          {
            credentials: "include",
          }
        )
          .then((res) => res.json())
          .then((res) => {
            setFriendReqs(res);
          });
      }
    };
    getFriendReqs();
  }, [props]);

  const acceptFriend = (friendRequest) => {
    fetch(
      `https://backend-production-f695.up.railway.app/acceptFriendReq/${friendRequest}`,
      {
        credentials: "include",
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          RequestingFriendsId: friendRequest,
          // reqId: reqId
        }),
      }
    );
  };

  const rejectFriend = (friendRequest) => {
    fetch(
      `https://backend-production-f695.up.railway.app/rejectFriendReq/${friendRequest}`,
      {
        credentials: "include",
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          RequestingFriendsId: friendRequest,
          // reqId: reqId
        }),
      }
    );
  };
  return (
    <div className="friend-reqs-list">
      {friendReqs.map((friendRequest) => {
        return (
          <div key={friendRequest._id} className="friend-req-card">
            <img
              className="friend-req-card-pic"
              src={friendRequest.profile_pic}
              alt="profile-pic"
            />
            <p>
              {friendRequest.firstName} {friendRequest.lastName}
            </p>
            <button
              onClick={() => {
                acceptFriend(friendRequest);
              }}
            >
              Accept
            </button>
            <button
              onClick={() => {
                rejectFriend(friendRequest);
              }}
            >
              Reject
            </button>
          </div>
        );
      })}
    </div>
  );
};
