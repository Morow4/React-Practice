import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // Import the CSS file

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email and password fields
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Email validation: check if it's a valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate form submission and API request
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Logged in:", { email, password });
      setEmail("");
      setPassword("");
      setError("");
      setIsSubmitting(false);

      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="login-container">
      {/* Left Side - Form */}
      <div className="form-container">
        <div className="form-card">
          <h2>Sign In</h2>
          <br />
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="input"
              />
            </div>

            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="footer">
            <p>
              Don't have an account?{" "}
              <Link to="/registration" className="sign-up-link">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="image-container" />
    </div>
  );
}

export default LoginPage;
