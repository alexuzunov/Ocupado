import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import axios from "axios";
import "../assets/css/Homepage.css";

import { useAuth } from "../contexts/AuthContext";

const Homepage = () => {
  const { currentData } = useAuth();

  return (
    <>
      {currentData ? (
        <div className="Homepage">
          <h1>Welcome! Which room are you looking for?</h1>
          <label for="buildings" className="buildings-list">
            Choose a building:{" "}
          </label>
          <select name="Buildings" id="buildings">
            <option value="hospital">Hospital</option>
            <option value="university">University</option>
            <option value="office-building">Office Building</option>
            <option value="other">Other</option>
          </select>
        </div>
      ) : (
        <div className="Homepage">
          <h1>Welcome! Reserve your room now?</h1>
          <h2>To reserve a room, you first need to login!</h2>
          <div>
            <a href="/register"><button class="btn btn-primary">Register</button></a>
            <a href="/login"><button class="ms-2 btn btn-primary">I already have an account</button></a>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
