import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  // state can not be manipulated directly, useState hook is used to manage state in functional components
  // but to modify the values we have to use setState function
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    // Add actual auth logic here
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          name="email"
          onChange={handleOnChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          name="password"
          onChange={handleOnChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
