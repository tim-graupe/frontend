import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Timeline = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [friendsPosts, setFriendsPosts] = useState([]);

  useEffect(() => {
    const getFriendsPosts = () => {
      if (props) {
        fetch(`http://localhost:4000/getFriendsPosts/${props}`, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((res) => {
            setFriendsPosts(res);
            setIsLoading(false);
          });
      }
    };
    getFriendsPosts();
    setIsLoading(false);
  }, [props]);

  return (
    <div className="timeline-container">
      {isLoading ? (
        <p>Loading please wait...</p>
      ) : (
        <div>
          {/* {friendsPosts.map((post) => {
            let date = new Date(post.date_posted);
            const options = {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            };
            return (
              <Link
                to={`/user/${post.id}`}
                className="timeline-post"
                key={post.date_posted}
              >
                <img
                  src={post.poster.profile_pic}
                  alt="profile pic"
                  className="profile-pic-post"
                />
                <p key={post.date_posted}>{post.content}</p>
                <sub>
                  <p>
                    {post.poster.firstName} {post.poster.lastName}{" "}
                  </p>
                  {date.toLocaleDateString("en-US", options)}
                </sub>
              </Link>
            );
          })} */}
        </div>
      )}
    </div>
  );
};
