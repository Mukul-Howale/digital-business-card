import React from "react";
import twitter_icon from "../images/twitter_icon.png";
import facebook_icon from "../images/facebook-icon.png";
import instagram_icon from "../images/instagram-icon.png";
import linkedin_icon from "../images/linkedin-icon.png";
import github_icon from "../images/gitHub-icon.png";
import "../styles/Footer.css";

export default function Footer(){
    return (
        <div className="footer">
            <img src={twitter_icon} alt="Twitter Icon"></img>
            <img src={facebook_icon} alt="Facebook Icon"></img>
            <img src={instagram_icon} alt="Instagram Icon"></img>
            <img src={linkedin_icon} alt="LinkedIn Icon"></img>
            <img src={github_icon} alt="Github Icon"></img>
        </div>
    )
}