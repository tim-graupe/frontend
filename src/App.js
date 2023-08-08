import "./App.css";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { useEffect, useState } from "react";
import { NewPost } from "./components/newPost";
import { NoPage } from "./components/noPage";
import { UserHome } from "./components/userDash/userHome";
import { Timeline } from "./components/userDash/timeline";
import { UserProfile } from "./components/userProfile";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/user/:id/new_post" element={<NewPost />} />
        <Route path="/user/:id/posts" element={<Timeline />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
