import React from 'react';
import '../Styles/about.css';
import topimage from '../assets/bg.jpg';

function About() {
    return (
        <div className="about">

            <div className="abouttop" style={{backgroundImage: `url(${topimage})` }}></div>
   

       <div className="aboutbottom">
        <h1>About Burger Cafe Point</h1>
<p> We serve the best burger that you will ever have. </p>

<p>Also offer various finger licking food items such as Pizza, 
    Tikka variety, Fish, French Toast and Cheese Cake in affordable prices. </p>
<p>Visit today to enjoy the taste. </p>
    </div>   

        </div>
    );
}

export default About;
