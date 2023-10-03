import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import GoogleButton from "react-google-button";
import { SearchUser } from "./searchUser";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const jsonData = {
    email: email,
    password: password,
  };

  const handleSignInGoogle = () => {
    window.open("https://tim-graupe.github.io/frontend/#/auth/google", "_self");
  };
  const submit = async (e) => {
    e.preventDefault();
    await fetch("https://tim-graupe.github.io/login", {
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
      .then((res) => [
        // setUser(JSON.stringify(res.user._id)),
        // localStorage.setItem("user", JSON.stringify(res.user)),
        // localStorage.setItem("isAuth", true),
        // setIsLoggedIn(true),
      ]);
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
      <GoogleButton onClick={handleSignInGoogle} />
    </div>
  );
};
