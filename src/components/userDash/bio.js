import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Bio = ({ props }) => {
  const [user, setUser] = useState("");

  return (
    <div className="bio-container">
      <h4>Education</h4>
      <p>College: {props.college}</p>
      <p>High School: {props.high_school}</p>
      <h4>About {props.firstName}</h4>
      <p>Relationship: {props.relationship}</p>
      <p>Politics: {props.politics}</p>
      <p>Hometown: {props.home_town}</p>
      <p>Current City: {props.current_city}</p>
    </div>
  );
};
