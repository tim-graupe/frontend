import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
// import { Link } from "react-router-dom";
>>>>>>> 6102586159c90038780cc06ada5ca61600517c33
import config from "../config";
export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [dob, setdob] = useState("");
  const [relationship, setRelationship] = useState("");
  const [politics, setPolitics] = useState("");
  const [home, setHome] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [highschool, setHighschool] = useState("");
  const [college, setCollege] = useState("");
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? config.development.apiUrl
      : config.production.apiUrl;

  const jsonData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    dob: dob,
    politics: politics,
    relationship: relationship,
    high_school: highschool,
    college: college,
    currentCity: currentCity,
    home_town: home,
  };

  const submit = async () => {
    const response = await fetch(`${apiUrl}/register`, {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*/",
      },
      body: JSON.stringify(jsonData),
    });
    const data = await response.json();
    console.log(data);

    data.user
      ? setMessage(`Welcome, ${data.user.firstName}`)
      : setMessage(data.error);
  };
  return (
    <div className="App">
      <input
        type="text"
        name="firstName"
        required
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        name="lastName"
        required
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="email"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="date"
        name="dob"
        className="form-control shadow-none"
        placeholder="mm/dd/yyyy"
        aria-describedby="button-addon2"
        onChange={(e) => setdob(e.target.value)}
      />{" "}
      <select
        name="relationship"
        onChange={(e) => setRelationship(e.target.value)}
      >
        <option value="single">Single</option>
        <option value="in a relationship">In a relationship</option>
        <option value="engaged">Engaged</option>
        <option value="married">Married</option>
        <option value="it's complicated">It's complicated</option>
        <option value="decline">Prefer not to say</option>
      </select>
      <select name="politics" onChange={(e) => setPolitics(e.target.value)}>
        <option value="very liberal">Very Liberal</option>
        <option value="liberal">Liberal</option>
        <option value="moderate">Moderate</option>
        <option value="apolitical">Apolitical</option>
        <option value="conservative">Conservative</option>
        <option value="very conservative">Very Conservative</option>

        <option value="decline">Prefer not to say</option>
      </select>
      <input
        type="text"
        name="home"
        onChange={(e) => setHome(e.target.value)}
      />
      <input
        type="text"
        name="current"
        onChange={(e) => setCurrentCity(e.target.value)}
      />
      <inpt
        type="text"
        name="highschool"
        onChange={(e) => setCurrentCity(e.target.value)}
      />
      <input
        type="text"
        name="college"
        onChange={(e) => setCollege(e.target.value)}
      />
      <button onClick={submit}>Register</button> <br></br>
      {message}
    </div>
  );
};
