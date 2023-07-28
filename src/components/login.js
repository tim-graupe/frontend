import React, { useEffect, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const jsonData = {
    username: email,
    password: password,
  };
  const submit = async () => {
    const response = await fetch("http://localhost:4000/login", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(jsonData),
    });
    console.log(response);
    const data = await JSON.parse(JSON.stringify(response));
    console.log(data);
  };
  return (
    <div className="App">
      <input
        type="email"
        name="username"
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
