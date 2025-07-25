import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard></Dashboard>}></Route>
    </Routes>
  );
};

export default DashboardRouter;
