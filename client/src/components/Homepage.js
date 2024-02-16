import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import axios from "axios";
import "../assets/css/Homepage.css";

import { useAuth } from "../contexts/AuthContext";

const Homepage = () => {
  const { currentData } = useAuth();

  return (
    <Homepage bg="light" data-bs-theme="light" className="fs-4 px-5">
      {currentData ? (
        <div className="Homepage">
          <h1>Welcome! Which room are you looking for?</h1>
          <label for="buildings" className="buildings-list">
            Choose a building:{" "}
          </label>
          <select name="Buildings" id="buildings">
            <option value="hospital">Hospital</option>
            <option value="university">University</option>
            <option value="office-building">Office-building</option>
            <option value="other">Other</option>
          </select>
        </div>
      ) : (
        <div className="Homepage">
          <h1>Welcome! Reserve your room now?</h1>
          <h2>To reserve room, you first need to login!</h2>
          <button>Register</button>
          <button>I already have an account</button>
        </div>
      )}
    </Homepage>
  );
};

export default Homepage;
