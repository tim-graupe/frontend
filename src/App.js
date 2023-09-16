import "./App.css";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/register";
import { Login } from "./components/login";
import { useEffect, useState } from "react";
import { NewPost } from "./components/newPost";
import { NoPage } from "./components/noPage";
import { Timeline } from "./components/userDash/timeline";
import { UserHome } from "./components/userDash/userHome";
import { Profile } from "./components/profile";
import { EditDetails } from "./components/userDash/editDetails";
import { CreateGroup } from "./components/actions/createGroup";
import { GroupPage } from "./components/groupPage";
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/user/:id/new_post" element={<NewPost />} />
        <Route path="/user/:id/posts" element={<Timeline />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/createGroup" element={<CreateGroup />} />
        <Route path="/group/:id" element={<GroupPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
