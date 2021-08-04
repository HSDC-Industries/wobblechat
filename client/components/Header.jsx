import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () =>{
    
  return(
      <div>
        <h1> WobbleChat </h1>
        <Link to={"/login"}><button>Logout</button></Link>
      </div>
    );
      
}

export default Header;