import React from "react";

function ProfileSection() {
    return (
        // Profile Section
        <section>
            <img alt="Profile pics" src={require("../assets/images/profile_img.jpg")} />
            <h1>Annette Black</h1>
            <h1>Slack name</h1>
        </section>
    );
}

export default ProfileSection;
