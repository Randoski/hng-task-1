import React from "react";
import '../assets/styles/profile-section.css';

function ProfileSection() {
    return (
        // Profile Section
        <section className="profile-container">
            <img alt="Profile pics" src={require("../assets/images/profile_img.jpg")} id="profile__img"/>
            <h1 id="slack" className="names">Randy</h1>
        </section>
    );
}

export default ProfileSection;
