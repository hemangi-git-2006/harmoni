import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      // ✅ Save login data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);

      // ✅ Redirect to quiz (protected page)
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back 🎧</h2>
        <p className="login-subtitle">
          Login to continue your music challenge
        </p>

        {error && <p className="error-text">{error}</p>}

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <button className="login-btn">Login →</button>

        <p className="login-footer">
          Don’t have an account?{" "}
          <span>
            <Link to="/signup">Signup</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
