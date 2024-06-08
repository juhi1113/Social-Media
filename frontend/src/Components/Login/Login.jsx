import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import { loginUser } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";


const Login = () =>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const { error } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.like);

  useEffect(() => {
    if (error) {
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      dispatch({ type: "clearMessage" });
    }
  }, [error, dispatch, message]);


  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social App
        </Typography>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/forgot/password">
          <Typography>Forgot Password?</Typography>
        </Link>

        <Button type="submit">Login</Button>

        <Link to="/register">
          <Typography>New User?</Typography>
        </Link>
      </form>
    </div>
  )
}

export default Login