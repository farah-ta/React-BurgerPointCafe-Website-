import React from 'react'
import Logo from "../assets/foodlogo.webp"
import {Link} from "react-router-dom";
import {useState} from 'react';
import '../Styles/navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
    return (
       <div className="navbar">
<div className="leftSide" id={openLinks ? "open" : "close"}>
<img src={Logo}/> 
<div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
        </div>
 </div>

 <div className="rightSide">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/menu">Menu</Link>
 
 <button onClick={toggleNavbar}>
<ReorderIcon/>
</button>
</div>

</div>
    )
}


export default Navbar
