import React, { useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../config";
export const EditDetails = ({ props, toggleEdit }) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [relationship, setRelationshipStatus] = useState(props.relationship);
  const [politics, setPolitics] = useState(props.politics);
  const [high_school, setHighSchool] = useState(props.high_school);
  const [college, setCollege] = useState(props.college);
  const [current_city, setCurrentCity] = useState(props.current_city);
  const [home_town, setHomeTown] = useState(props.home_town);

  const id = useParams().id;
  const [error, setError] = useState(null);
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? config.development.apiUrl
      : config.production.apiUrl;
<<<<<<< HEAD

=======
>>>>>>> 6102586159c90038780cc06ada5ca61600517c33
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/user/${id}/bio`, {
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

      if (response.ok) {
        setError(null);
        toggleEdit();
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while updating the profile.");
    }
  };

  return (
    <div className="current-details">
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
              <option value="Single">Single</option>
              <option value="In A Relationship">In a relationship</option>
              <option value="Engaged">Engaged</option>
              <option value="Sarried">Married</option>
              <option value="It's Complicated">It's complicated</option>
              <option value="Prefer Not To Say">Prefer not to say</option>
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
              <option value="Very Liberal">Very Liberal</option>
              <option value="Liberal">Liberal</option>
              <option value="Moderate">Moderate</option>
              <option value="Other">Other</option>
              <option value="Apolitical">Apolitical</option>
              <option value="Conservative">Conservative</option>
              <option value="Very Conservative">Very Conservative</option>

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
