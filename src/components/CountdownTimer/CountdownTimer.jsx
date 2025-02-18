import { useState, useEffect } from "react";
import "./CountdownTimer.scss";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <h2 className="countdown__text">{timeLeft.days}d :</h2>
      <h2 className="countdown__text">{timeLeft.hours}h :</h2>
      <h2 className="countdown__text">{timeLeft.minutes}m :</h2>
      <h2 className="countdown__text">{timeLeft.seconds}s</h2>
    </div>
  );
};

export default CountdownTimer;
