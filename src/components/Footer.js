import React from "react";

function Footer() {
    return (
        <section>
            <div>
                <img alt="Profile pics" src={require("../assets/images/zuri.jpg")} />
                <p>HNG Internship 9 Frontend Task</p>
                <img alt="Profile pics" src={require("../assets/images/I4G.jpg")} />
            </div>
        </section>
    );
}

export default Footer;
