import React from 'react';


function Menulist({image,name, price}) {
    
    return (
        <div className="menut">

            <div style={{ backgroundImage: `url(${image})` }} > 
            </div>
            <h1>{name}</h1>
            <p>${price}</p>
</div>
    );
}

export default Menulist;




