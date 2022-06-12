import "../styles/moving.scss";
import "../styles/homeBg.css";
import React from "react";
import Messages from "./Messages";

export default function Home(props) {
    return (
        <div>
            <div className="bubbles">
                <div className="bubble">Home</div>
                <div className="bubble">Volunteer</div>
                <div className="bubble">Saathi</div>
                <div className="bubble">Support</div>
                <div className="bubble">Help</div>
                <div className="bubble">Pain</div>
                <div className="bubble">Women</div>
                <div className="bubble">Old</div>
                <div className="bubble">Rights</div>
                <div className="bubble">Speak Up</div>
                <div className="bubble">Happy</div>

                <section className="about-section">
                    <Messages />
                </section>
            </div>
        </div>
    );
}
