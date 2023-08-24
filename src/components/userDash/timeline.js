import React from "react";

export const Timeline = ({ props }) => {
  return (
    <div className="timeline-container">
      {props === undefined ? (
        <p>Loading please wait...</p>
      ) : (
        <div>
          {props.map((post) => {
            return (
              <div className="timeline-post" key={post.date_posted}>
                <p key={post.content}>{post.content}</p>
                <sub>
                  {/* add google icons */}
                  {post.replies.length} {post.likes.length}
                </sub>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
