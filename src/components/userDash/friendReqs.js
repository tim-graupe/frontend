import React, { useState, useEffect } from "react";

export const FriendReqs = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [friendReqs, setFriendReqs] = useState([]);
  useEffect(() => {
    const getUserProfile = () => {
      fetch(`http://localhost:4000/getFriendReqs/${props}`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setFriendReqs(res));
      setIsLoading(false);
    };
    getUserProfile();
  }, []);

  const acceptFriend = (id) => {
    fetch(`http://localhost:4000/acceptFriendReq/${id}`, {
      credentials: "include",
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
  };
  return (
    <div className="friend-reqs-list">
      {friendReqs.map((friend) => {
        return (
          <div key={friend._id} className="friend-req-card">
            <img
              className="friend-req-card-pic"
              src={friend.profile_pic}
              alt="profile-pic"
            />
            <p>
              {friend.firstName} {friend.lastName}
            </p>
            <button
              onClick={() => {
                acceptFriend(friend.sender._id);
              }}
            >
              Accept
            </button>
          </div>
        );
      })}
    </div>
  );
};
