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
    console.log(id);
    fetch(`http://localhost:4000/acceptFriendReq/${id}`, {
      credentials: "include",
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
                acceptFriend(friend._id);
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
