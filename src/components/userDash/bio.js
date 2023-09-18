import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { EditDetails } from "./editDetails";

export const Bio = ({ props, loggedUser_id, user_id }) => {
  const [user, setUser] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const id = useParams().id;

  const toggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  return (
    <div className="bio-container">
      {isEditing ? (
        <section className="details-edit-form">
          <EditDetails props={props} toggleEdit={toggleEdit} />
        </section>
      ) : (
        <section className="current-details">
          <h4>Education</h4>
          <p>College: {props.college}</p>
          <p>High School: {props.high_school}</p>
          <h4>About {props.firstName}</h4>
          <p>Relationship: {props.relationship}</p>
          <p>Politics: {props.politics}</p>
          <p>Hometown: {props.home_town}</p>
          <p>Current City: {props.current_city}</p>+
        </section>
      )}

      {loggedUser_id === user_id && (
        <button className="edit-btn" onClick={toggleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
      )}
    </div>
  );
};
