import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to login
    console.log(email, password);
    navigate("/"); // Navigate to Home after login
  };

  return (
    <div className="centered">
      <form onSubmit={handleLogin} className="form-card">
        <h1 className="form-title">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn primary-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
