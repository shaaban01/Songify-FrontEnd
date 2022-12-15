import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };

      await axios({
        method: "POST",
        url: "https://localhost:7258/api/Auth/login",
        data: body,
      })
        .then((response) => {
          setToken(response.data);
          localStorage.setItem("token", response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(localStorage.getItem("token"));
      navigate("/discover");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="flex justify-center mt-20	items-center main-container h-full " >
      <div class="w-1/2 shadow-lg p-5 rounded bg-white align-middle">
        <p class="font-bold text-2xl text-center mt-3 mb-8">LOGIN</p>
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
          onClick={onLogin}
        >
          LOGIN
        </button>
        

        <Link to={`/register`}>
          <p className="mt-6 mb-3 text-center block"> Don't have an account?</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
