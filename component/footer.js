import React from 'react';
import Twittericon from '@mui/icons-material/Twitter'; 
import '../Styles/footer.css';
import Instagramicon from '@mui/icons-material/Instagram';
import Facebookicon from '@mui/icons-material/Facebook';
import YouTubeicon from '@mui/icons-material/YouTube';



function Footer() {
    return (
        <div className="footer">
<div className="social">
    <Twittericon onClick={() => window.open('https://twitter.com/')} target='_blank'/>
    <Instagramicon onClick={() => window.open('https://www.instagram.com/')} target='_blank'/>
    <YouTubeicon onClick={() => window.open('https://www.youtube.com/')} target='_blank'/>
    <Facebookicon onClick={()=> window.open('https://www.facebook.com/')} target='_blank' />
</div>

<p>&copy; 2023 by Burger Point Cafe</p>

        </div>
    );
}

export default Footer;
