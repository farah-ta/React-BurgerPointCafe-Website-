import React from "react";
import {Link} from "react-router-dom";
import "../Styles/home.css";
import Bg from '../assets/homebg.jpg';


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Bg})` }}>

      <div className="headerContainer" >
        <h1> Burger Point Cafe </h1>
        
      <Link to ="/menu">
      <button> Order Now</button>
      </Link>

      </div>
      </div>
  );
}

export default Home;