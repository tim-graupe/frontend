import React, { useState } from "react";
import GoogleButton from "react-google-button";
import config from "../config";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? config.development.apiUrl
      : config.production.apiUrl;
  const jsonData = {
    email: email,
    password: password,
  };

  const handleSignInGoogle = () => {
    window.open(
      `https://backend-production-f695.up.railway.app/auth/google`,
      "_self"
    );
  };
  // const submit = async (e) => {
  //   e.preventDefault();
  //   await fetch(`${apiUrl}/login`, {
  //     mode: "cors",
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Credentials": true,
  //       "Access-Control-Allow-Origin": "*/",
  //     },
  //     body: JSON.stringify(jsonData),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => [
  //       // setUser(JSON.stringify(res.user._id)),
  //       // localStorage.setItem("user", JSON.stringify(res.user)),
  //       // localStorage.setItem("isAuth", true),
  //       // setIsLoggedIn(true),
  //     ]);
  // };

  return (
    <div className="App">
      {/* <input
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
      <button onClick={submit}>Login</button> <br></br> */}
      <GoogleButton onClick={handleSignInGoogle} />
    </div>
  );
};
