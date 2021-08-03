import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import auth from "./Auth";

const Login = (props) => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleUsernameInputChange = (e) => {
    e.persist();
    setUserData((userData) => ({
      ...userData,
      username: e.target.value,
    }));
  };

  const handlePasswordInputChange = (e) => {
    e.persist();
    setUserData((userData) => ({
      ...userData,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    })
      .then((response) => {
        history.push("/");
      })
      .catch((err) => {
        console.log("Error making fetch request", err);
      });
    history.push("/");
  };

  return (
    <div className='login-page'>
      <h1>WobbleChat</h1>
      <div className='login-box'>
        <form onSubmit={handleSubmit}>
          <input
            id="username"
            className="form-field"
            type="text"
            name="username"
            value={userData.username}
            onChange={handleUsernameInputChange}
          />
          <input
            id="password"
            className="form-field"
            type="text"
            name="username"
            value={userData.password}
            onChange={handlePasswordInputChange}
          />
          <input className="signup-or-login-button" type="submit" value="login" />
        </form>
        <Link to='/signup'><button className="signup-or-login-button">Sign Up</button></Link>
      </div>
    </div>
  );
};

export default Login;
