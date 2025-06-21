import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { useLocation } from "react-router";

export const LoginPage = () => {
  const location = useLocation();
  const from =
    (location.state as { from?: Location })?.from?.pathname ||
    "/ccpedigree-rebuild"; // Default to home page if no state is provided
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const dummyUser = { email: "test@example.com", password: "123456" };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== dummyUser.email || password !== dummyUser.password) {
      setError("Invalid email or password");
    } else {
      // Simulate successful login
      login(email);
      navigate(from, { replace: true }); // Redirect to home page after login
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
