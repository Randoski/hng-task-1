import React from "react";
import '../assets/styles/footer.css';


function Footer() {
    return (
        <section className="footer-container">
            <div >
                <img alt="Profile pics" src={require("../assets/images/zuri.jpg")} className="zuri-logo" />
                <p>HNG Internship 9 Frontend Task</p>
                <img alt="Profile pics" src={require("../assets/images/I4G.jpg")} className="i4g-logo" />
            </div>
        </section>
    );
}

export default Footer;
