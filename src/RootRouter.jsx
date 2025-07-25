import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import UserRouter from "./users/routers/UserRouter";
import Landing from "./core/components/Landing";
import DashboardRouter from "./dashboard/router/dashboardRouter";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/user/*" element={<UserRouter></UserRouter>}></Route>
      <Route path="/dashboard" element={<DashboardRouter />}></Route>
    </Routes>
  );
};

export default RootRouter;
