import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="header">
      <h1 className="header-title">Shopping List App</h1>
      <nav className="header-nav">
        {token ? (
          <>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
            <button onClick={handleLogout} className="nav-link">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
