import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import UserRouter from "./users/routers/UserRouter";
import Landing from "./core/components/Landing";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/user/*" element={<UserRouter></UserRouter>}></Route>
    </Routes>
  );
};

export default RootRouter;
