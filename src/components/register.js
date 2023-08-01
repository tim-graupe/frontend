import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [dob, setdob] = useState("");

  const jsonData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    dob: dob,
  };

  const submit = async () => {
    const response = await fetch("http://localhost:4000/register", {
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
      <button onClick={submit}>Register</button> <br></br>
      {message}
    </div>
  );
};
