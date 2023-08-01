import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const jsonData = {
    email: email,
    password: password,
  };

  useEffect(() => {});

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/login", {
      mode: "cors",
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*/",
      },
      body: JSON.stringify(jsonData),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("user", JSON.stringify(res.user)));
  };

  return (
    <div className="App">
      <input
        type="email"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submit}>Login</button> <br></br>
      {message}
    </div>
  );
};
