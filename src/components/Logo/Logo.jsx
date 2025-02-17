import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
  return (
    <>
      <Link to="/" className="logo-link">
        <h1 className="logo">Farm Folks Market</h1>
      </Link>
    </>
  );
};

export default Logo;
