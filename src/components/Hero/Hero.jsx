import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <p className="hero__text hero__text--padding">
        Upcoming 🌾Farmer's Market in...
      </p>
      <CountdownTimer targetDate="2025-03-02T00:00:00" />
      <div className="hero__loc-container">
        <div className="hero__address-container">
          <p className="hero__text-copy">📍 123 Greenfield Ave,</p>
          <p className="hero__text-copy">Toronto, ON M4B 1V5</p>
          <p className="hero__text-copy hero__text-copy--bold">
            2nd March, 2025 onwards!
          </p>
        </div>
        <div className="hero__timing-container">
          <p className="hero__text-copy">🕰️ Market Hours</p>
          <p className="hero__text-copy">
            📅 Monday - Friday: 12:00 PM - 7:00 PM
          </p>
          <p className="hero__text-copy">📅 Saturday: 8:00 AM - 7:00 PM</p>
          <p className="hero__text-copy">🚫 Sunday: Closed</p>
        </div>
      </div>
      <div className="hero__button-container">
        <Link to="/vendors">
          <button className="hero__button">Explore Vendors</button>
        </Link>
        <Link to="/register">
          <button className="hero__button">Join Our Vendor List</button>
        </Link>
      </div>
      <p className="hero__text">🧺 Shop Small, 🥖Eat Fresh, 💛Love Local!</p>
    </section>
  );
};

export default Hero;
