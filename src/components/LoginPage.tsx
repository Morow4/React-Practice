import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // For navigation

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    console.log("Submitted:", { email, password });
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <LoginContainer>
      <LoginCard>
        <h2>Sign In</h2>
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

          <Button type="submit">Login</Button>
        </form>
        <Footer>
          <p>
            Don't have an account?{" "}
            <SignUpLink as={Link} to="/registration">
              Sign Up
            </SignUpLink>
          </p>
        </Footer>
      </LoginCard>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const LoginCard = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
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
  transition: background-color 0.3s;
  &:hover {
    background-color: #357ae8;
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

export default LoginPage;
