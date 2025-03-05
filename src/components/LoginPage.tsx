import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import lvBuilding from "../assets/Lvbuilding.jpg";

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
    <LoginContainer>
      {/* Left Side - Form */}
      <FormContainer>
        <FormCard>
          <h2>Sign In</h2>
          <br/>
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </FormGroup>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>
          <Footer>
            <p>
              Don't have an account?{" "}
              <SignUpLink as={Link} to="/registration">
                Sign Up
              </SignUpLink>
            </p>
          </Footer>
        </FormCard>
      </FormContainer>

      {/* Right Side - Image */}
      <ImageContainer />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #ffffff;
`;

const FormCard = styled.div`
  background-color: white;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: left;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 5px;
  transition: border-color 0.3s ease-in-out;
  &:focus {
    border-color: #4d90fe;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4d90fe;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #357ae8;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 15px;
`;

const Footer = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #777;
`;

const SignUpLink = styled(Link)`
  color: #4d90fe;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  background-image: url(${lvBuilding});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

export default LoginPage;
