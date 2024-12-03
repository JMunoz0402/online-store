import "./styles/about.css";
import { useState } from "react";

function About() {
    const [visibleEmail, setVisibleEmail] = useState(false);

    function showEmail() {
        setVisibleEmail(true);
    }

    return (
        <div className="about">
            <h1>About Our Supermarket</h1>
            <p>Welcome to our supermarket! We are dedicated to providing fresh, high-quality products and exceptional customer service.</p>

            
            <div className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-member">
                <img src="/images/staff.jpeg" alt="Jesus Munoz" className="team-photo" />
                    <h3>Jesus Munoz</h3>
                    {visibleEmail ? (
                        <h5>jesusmunoz0402@gmail.com</h5>
                    ) : (
                        <label>Click the button to see my email</label>
                    )}
                    <br />
                    {!visibleEmail && (
                        <button onClick={showEmail} className="btn btn-outline-primary">Show Email</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default About;
