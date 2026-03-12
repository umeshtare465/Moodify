import React from "react";
import Formgroup from "../components/Formgroup";
import "../style/register.scss";
import { Link } from "react-router";

import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";
const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister({ email, password, username });
    navigate("/");
  }
  return (
    <main className="register-page">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <Formgroup
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            label="Username"
            placeholder="Enter your username"
          />
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
            Register
          </button>
        </form>
        <p>
          {" "}
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
