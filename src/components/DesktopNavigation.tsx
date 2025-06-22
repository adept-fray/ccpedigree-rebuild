import { Link } from "react-router";
import { useAuth } from "../context/authContext";

export const DesktopNavigation = () => {
  const { user, logout } = useAuth();
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="md:flex justify-between items-center hidden">
        <ul className="flex space-x-4">
          {user ? (
            <>
              <li>
                <Link
                  to="/ccpedigree-rebuild/my-dogs"
                  className="text-white hover:underline"
                >
                  My Dogs
                </Link>
              </li>
              <li>
                <Link
                  to="/ccpedigree-rebuild/add-dog"
                  className="text-white hover:underline"
                >
                  Add Dog
                </Link>
              </li>
              <li>
                <button className="hover:underline" onClick={logout}>
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/ccpedigree-rebuild/login"
                  className="text-white hover:underline"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/ccpedigree-rebuild/signup"
                  className="text-white hover:underline"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              to="/ccpedigree-rebuild/about"
              className="text-white hover:underline"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
