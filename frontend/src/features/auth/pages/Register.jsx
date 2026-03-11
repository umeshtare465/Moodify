import React from "react";
import Formgroup from "../components/Formgroup";
import "../style/register.scss";
import { Link } from "react-router";
const Register = () => {
  return (
    <main className="register-page">
      <div className="form-container">
        <form>
          <h1>Register</h1>
          <Formgroup label="Username" placeholder="Enter your username" />
          <Formgroup label="Email" placeholder="Enter your email" />
          <Formgroup label="Password" placeholder="Enter your password" />
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
