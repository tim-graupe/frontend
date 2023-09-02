import React from "react";
import { Link } from "react-router-dom";

export const Timeline = ({ props }) => {
  return (
    <div className="timeline-container">
      {props === undefined ? (
        <p>Loading please wait...</p>
      ) : (
        <div>
          {props.map((post) => {
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
          })}
        </div>
      )}
    </div>
  );
};
