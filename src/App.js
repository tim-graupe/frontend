import "./App.css";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { useEffect, useState } from "react";
import { NewPost } from "./components/newPost";
import { NoPage } from "./components/noPage";
import { UserHome } from "./components/userDash/userHome";

function App() {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const isUserLogged = localStorage.getItem("user");
    isUserLogged ? setUser(JSON.parse(isUserLogged)) : setUser("Guest");
    isUserLogged ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  if (loggedIn) {
    return (
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/register" element={<UserHome />} />
          <Route path="/login" element={<UserHome />} />
          <Route path="/user/:id" element={<UserHome />} />
          <Route path="/user/:id/new_post" element={<NewPost />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  } else
    return (
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
