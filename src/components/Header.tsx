import { Link } from "react-router-dom";
import "../index.css"; 

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Shopping List App</h1>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
