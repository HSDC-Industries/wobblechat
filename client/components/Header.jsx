import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () =>{
    
  return(
      <div className="header">
        <h1> WobbleChat </h1>
        <Link to={"/chat"}><button id="chatButton">Chat</button></Link>
        <Link to={"/login"}><button id="signoutButton">Sign out</button></Link>
      </div>
    );
      
}

export default Header;