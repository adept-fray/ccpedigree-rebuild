import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link to="/ccpedigree-rebuild">Home</Link>
      <Link to="/ccpedigree-rebuild/login">Login</Link>
      <Link to="/ccpedigree-rebuild/signup">Sign Up</Link>
    </nav>
  );
};
