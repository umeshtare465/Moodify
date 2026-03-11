import React from "react";
import "../style/login.scss";
import Formgroup from "../components/Formgroup";
import { Link } from "react-router";
const Login = () => {
  return (
    <main className="login-page">
      <div className="form-cotainer">
        <form>
          <h1>Login</h1>
          <Formgroup label="Username" placeholder="Enter your username" />
          <Formgroup label="Password" placeholder="Enter your password" />
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
