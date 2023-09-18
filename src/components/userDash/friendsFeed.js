import React, { useState, useEffect } from "react";
import { Post } from "../postComponent";
export const FriendsFeed = ({ props }) => {
  const [friendsPosts, setFriendsPosts] = useState([]);

  useEffect(() => {
    const getFriendsPosts = () => {
      if (props) {
        fetch(
          `https://backend-production-f695.up.railway.app/getFriendsPosts/${props}`,
          {
            credentials: "include",
          }
        )
          .then((res) => res.json())
          .then((res) => {
            setFriendsPosts(res.friendsPosts);
          });
      }
    };
    getFriendsPosts();
  }, [props]);

  return (
    <div className="profile-container">
      {!props ? (
        <p>Loading please wait...</p>
      ) : (
        <div>
          <h1>See what your friends are saying</h1>

          {friendsPosts.map((post) => {
            return (
              <div key={post._id}>
                <Post props={post} />
                <br></br>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
