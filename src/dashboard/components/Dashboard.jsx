import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../users/redux/actions/usersAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userInfo, loading, error } = useSelector((state) => state.user);
  console.log("Dashboard userInfo:", userInfo);
  console.log("Dashboard loading:", loading);
  console.log("Dashboard error:", error);
  useEffect(() => {
    // You can dispatch actions here if needed, for example to load user data
    dispatch(getUserDetails());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  if (!userInfo) {
    return <p>No user information available.</p>;
  }

  return (
    <>
      <h2>Dashboard</h2>
      {userInfo ? (
        <ul>
          <li>
            <strong>ID:</strong> {userInfo.id}
          </li>
          <li>
            <strong>Name:</strong> {userInfo.name}
          </li>
          <li>
            <strong>Email:</strong> {userInfo.email}
          </li>
          <li>
            <strong>Role:</strong> {userInfo.role}
          </li>
        </ul>
      ) : (
        <p>User not found.</p>
      )}
    </>
  );
};

export default Dashboard;
