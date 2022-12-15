import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch("https://localhost:7258/api/Auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div class="flex justify-center items-center main-container mt-20 ">
      <div class="w-1/2 shadow-lg p-5 rounded bg-white">
        <p class="font-bold text-2xl text-center mt-3 mb-8">SIGNUP</p>
        <div class="mb-3">
          <label>Username</label>
          <br />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Type your username"
            class="border-b-2 pt-3 pb-3 mb-3 w-full"
          />
        </div>
        <div class="mb-3">
          <label>Name</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Type your name"
            class="border-b-2 pt-3 pb-3 mb-3 w-full"
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Type your password"
            class="border-b-2 pt-3 pb-3 mb-3 w-full"
          />
        </div>
        <button
          class="block bg-gradient-to-r from-purple-400 via-violet-800 to-indigo-900 text-white pt-3 pb-3 pl-6 pr-6 rounded w-full mt-5"
          onClick={onRegister}
        >
          Signup
        </button>
        
        <Link to={`/login`}>
          <p className="mt-6 mb-3 text-center block">
            {" "}
            Already have an account?
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
