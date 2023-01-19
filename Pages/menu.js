import React from "react";
import { Menuitems } from "../helpers/Menuitems.js";
import  Menulist  from '../component/menulist.js';
import "../Styles/menu.css";

function Menu() {
   
    return (
        
<div className="menu">
<div className="menulist">
    {Menuitems.map((menulist, key) => 
    (
   <Menulist
   key={key}
   image={menulist.image}
   name={menulist.Name}
   price={menulist.price}
   />
    ))}
    </div>
    
</div>

    );
    }
export default Menu;




