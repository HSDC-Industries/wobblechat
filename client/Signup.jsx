import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import auth from "./Auth";

const Signup = (props) => {
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
    //check if username already exists in database,
    e.preventDefault();
    fetch("/api/users/signup", {
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
    <div className ="outer-div">
      <div className = "wobble-div">
        <h1>WobbleChat</h1>
      </div>
      <div className='login-page'>
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          className="form-field"
          type="text"
          name="username"
          placeholder="username"
          value={userData.username}
          onChange={handleUsernameInputChange}
        />
        <input
          id="password"
          className="form-field"
          type="password"
          name="username"
          placeholder="password"
          value={userData.password}
          onChange={handlePasswordInputChange}
        />
        <input className="form-button" type="submit" value="Signup" />
      </form>
      <Link className="signup-or-login" to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Signup;
