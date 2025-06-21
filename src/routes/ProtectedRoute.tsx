import type { JSX } from "react";
import { useAuth } from "../context/authContext";
import { Spinner } from "../components/Spinner";
import { Link, useLocation } from "react-router";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Spinner />; // or a spinner component
  }
  if (!user) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>You must log in first</h2>
        <p>
          You tried to access: <code>{location.pathname}</code>
        </p>
        <p>
          {/* <a href="/ccpedigree-rebuild/login">Go to Login</a> */}
          <Link to="/ccpedigree-rebuild/login" state={{ from: location }}>
            Go to Login
          </Link>
        </p>
      </div>
    );
    // return <Navigate to="/ccpedigree-rebuild/login" state={{form: location}} replace />;
  }
  return children;
};
