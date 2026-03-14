import React from "react";
import { useState } from "react";
import "../style/login.scss";
import Formgroup from "../components/Formgroup";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await handleLogin({ email, password });
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  }
  return (
    <main className="login-page">
      <div className="form-cotainer">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Formgroup
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            label="Email"
            placeholder="Enter your email"
          />
          <Formgroup
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            label="Password"
            placeholder="Enter your password"
          />
          <button type="submit" className="button">
            Login
          </button>
        </form>
        <p>
          {" "}
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
