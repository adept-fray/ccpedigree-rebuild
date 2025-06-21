import type { JSX } from "react";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading user data...</p>; // or a spinner component
  }
  if (!user) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>You must log in first</h2>
        <p>
          You tried to access: <code>{location.pathname}</code>
        </p>
        <p>
          <a href="/ccpedigree-rebuild/login">Go to Login</a>
        </p>
      </div>
    );
    // return <Navigate to="/ccpedigree-rebuild/login" replace />;
  }
  return children;
};
