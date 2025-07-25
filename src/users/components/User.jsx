// src/components/RegisterComponent.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/actions/usersAction";

const RegisterComponent = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(form.username, form.email, form.password));
  };

  return (
    <div>
      <h2>Register</h2>
      {userState.loading && <p>Loading...</p>}
      {userState.error && <p style={{ color: "red" }}>{userState.error}</p>}
      {userState.userInfo && <p>Welcome, {userState.userInfo.username}!</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterComponent;
