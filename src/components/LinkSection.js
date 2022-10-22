import React from "react";

function LinkSection() {
    return (
        <section>
            {/* Links */}
            <section>
                {/* Twitter Link */}
                <a href="https://training.zuri.team/" target="_blank" rel="noreferrer">
                    Twitter Link
                </a>

                {/* Zuri Team */}
                <a href="http://books.zuri.team/" target="_blank" rel="noreferrer">
                    Zuri Team
                </a>

                {/* Zuri Books */}
                <a href="https://books.zuri.team/" target="_blank" rel="noreferrer">
                    Zuri Books
                </a>

                {/* Python Books */}
                <a
                    href="https://background.zuri.team/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Python Books
                </a>

                {/* Background check for Coders */}
                <a
                    href="https://background.zuri.team/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Background Check for Coders
                </a>

                {/* Design Books */}
                <a
                    href="https://books.zuri.team/design-rules"
                    target="_blank"
                    rel="noreferrer"
                >
                    Design Books
                </a>
            </section>

            {/* Slack and GitHub */}
            <section>
                {/* Slack */}
                <a href="/">
                    <img alt="slack logo" src={require("../assets/images/slack.jpg")} />
                </a>

                {/* GitHub */}
                <a href="/">
                    <img alt="GitHub logo" src={require("../assets/images/GitHub.jpg")} />
                </a>
            </section>
        </section>
    );
}

export default LinkSection;
