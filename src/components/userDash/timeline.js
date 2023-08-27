import React from "react";

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
              <div className="timeline-post" key={post.date_posted}>
                <img
                  src={post.pic}
                  alt="profile pic"
                  className="profile-pic-post"
                />
                <p key={post.date_posted}>{post.content}</p>
                <sub>
                  <p>
                    {post.poster} {date.toLocaleDateString("en-US", options)}
                  </p>
                </sub>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
