import React from "react";
import my_image from "../images/my_image.jpg";
import mail_icon from "../images/mail_icon.png";
import "../styles/Info.css";

export default function Info() {
    return (
        <div className="info">
            <img src={my_image} alt="This is me" className="my-photo"></img>
            <p className="name">Mukul Howale</p>
            <p className="person-title">Full Stack Developer</p>
            <a href="https://mukulhowale.netlify.app" className="portfolio-link">My Portfolio</a>
            <div className="email-button">
                <img src={mail_icon} alt="Email Icon"></img>
                <p>Email</p>
            </div>
        </div>
    )
}