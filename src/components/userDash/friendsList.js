import React from "react";

export const Friends = (props) => {
  return (
    <section className="friends-container">
      <p> You have {props.friends.length} friends.</p>
    </section>
  );
};
