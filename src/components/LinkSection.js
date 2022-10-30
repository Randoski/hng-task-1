import React from "react";
import '../assets/styles/link-section.css';

function LinkSection() {
    return (
        <section id="link-section-container">

            {/* Links */}

            <section className="link-container">

                {/* Twitter Link */}
                <a href="https://twitter.com/randoskii/" target="_blank" rel="noreferrer" id="twitter" className="link">
                    Twitter Link
                </a>

                {/* Slack */}
                <p id="slack" className="link">Slack</p>

                {/* Zuri Team */}
                <a href="https://training.zuri.team/" target="_blank" rel="noreferrer" id="btn__zur" className="link">
                    Zuri Team
                </a>

                {/* Zuri Books */}
                <a href="https://books.zuri.team/" target="_blank" rel="noreferrer" id="books" className="link">
                    Zuri Books
                </a>

                {/* Python Books */}
                <a href="https://books.zuri.team/" target="_blank" rel="noreferrer" id="book__python" className="link">
                    Python Books
                </a>

                {/* Background check for Coders */}
                <a
                    href="https://background.zuri.team/" target="_blank" rel="noreferrer" id="pitch" className="link">
                    Background Check for Coders
                </a>

                {/* Design Books */}
                <a
                    href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" id="book__design" className="link">
                    Design Books
                </a>

            </section>

            {/* Slack and GitHub */}
            <section className="socials">
                {/* Slack */}
                <a href="https://app.slack.com" className="slack" target="_blank" rel="noreferrer">
                    <img alt="slack logo" src={require("../assets/images/slack.jpg")} />
                </a>

                {/* GitHub */}
                <a href="https://github.com/randoski" className="github" target="_blank" rel="noreferrer">
                    <img alt="GitHub logo" src={require("../assets/images/GitHub.jpg")} />
                </a>
            </section>
        </section>
    );
}


export default LinkSection;
