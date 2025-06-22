import { Link } from "react-router";
import { useAuth } from "../context/authContext";

export const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link to="/ccpedigree-rebuild">Home</Link>
      <Link to="/ccpedigree-rebuild/about">About</Link>
      {user ? (
        <>
          <span>Welcome, {user.email}</span>
          <Link to="/ccpedigree-rebuild/add-dog">Add Dog</Link>
          <Link to="/ccpedigree-rebuild/my-dogs">My Dogs</Link>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <>
          <Link to="/ccpedigree-rebuild/login">Login</Link>
          <Link to="/ccpedigree-rebuild/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};
