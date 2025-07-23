import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Login from "../components/Login";
import User from "../components/User";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<User></User>}></Route>
    </Routes>
  );
};

export default UserRouter;
