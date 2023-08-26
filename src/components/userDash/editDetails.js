import React, { useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

export const EditDetails = ({ props }) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [relationship, setRelationshipStatus] = useState(props.relationship);
  const [politics, setPolitics] = useState(props.politics);
  const [high_school, setHighSchool] = useState(props.high_school);
  const [college, setCollege] = useState(props.college);
  const [current_city, setCurrentCity] = useState(props.current_city);
  const [home_town, setHomeTown] = useState(props.home_town);
  const id = useParams().id;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/user/${id}/bio`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        relationship,
        politics,
        high_school,
        college,
        current_city,
        home_town,
      }),
    });
  };

  return (
    <div className="profile-form-container">
      <h2>Edit User Profile</h2>
      <form className="profile-form" onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <div className="select-container">
          <label>
            Relationship Status:
            <select
              name="relationship"
              onChange={(e) => setRelationshipStatus(e.target.value)}
            >
              <option value="single">Single</option>
              <option value="in a relationship">In a relationship</option>
              <option value="engaged">Engaged</option>
              <option value="married">Married</option>
              <option value="it's complicated">It's complicated</option>
              <option value="decline">Prefer not to say</option>
            </select>
          </label>
        </div>
        <br />
        <div className="select-container">
          <label>
            Politics:
            <select
              name="politics"
              onChange={(e) => setPolitics(e.target.value)}
            >
              <option value="very liberal">Very Liberal</option>
              <option value="liberal">Liberal</option>
              <option value="moderate">Moderate</option>
              <option value="other">Other</option>
              <option value="apolitical">Apolitical</option>
              <option value="conservative">Conservative</option>
              <option value="very conservative">Very Conservative</option>

              <option value="decline">Prefer not to say</option>
            </select>
          </label>
        </div>
        <br />
        <label>
          High School:
          <input
            type="text"
            value={high_school}
            onChange={(e) => setHighSchool(e.target.value)}
          />
        </label>
        <br />
        <label>
          College:
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
        </label>
        <br />
        <label>
          Current City:
          <input
            type="text"
            value={current_city}
            onChange={(e) => setCurrentCity(e.target.value)}
          />
        </label>
        <br />
        <label>
          Home Town:
          <input
            type="text"
            value={home_town}
            onChange={(e) => setHomeTown(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};
