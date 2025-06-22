import { Link } from "react-router";
import { useAuth } from "../context/authContext";

export const MobileNavigation = ({
  handleMenuToggle,
}: {
  handleMenuToggle: any;
}) => {
  const { user, logout } = useAuth();
  return (
    <>
      {/* Mobile Navigation */}
      <nav
        className="mobile hidden absolute right-0 top-0 p-4 bg-blue-600/20 drop-shadow-xl/50 w-full h-full backdrop-blur-xs sm:w-3/4"
        onClick={handleMenuToggle}
      >
        <ul>
          <li className="flex items-end justify-end py-2 pr-2">
            <span className="cursor-pointer text-white hover:text-gray-800 py-4 px-6 bg-teal-600 hover:bg-teal-400/60 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          </li>
          <li>
            <Link
              to="/ccpedigree-rebuild/about"
              className="py-4 px-6 bg-teal-600 hover:bg-teal-400/60 rounded block"
            >
              About
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link
                  to="/ccpedigree-rebuild/my-dogs"
                  className="py-4 px-6 bg-teal-600 hover:bg-teal-400/60 rounded block"
                >
                  My Dogs
                </Link>
              </li>
              <li>
                <Link
                  to="/ccpedigree-rebuild/add-dog"
                  className="py-4 px-6 bg-teal-600 hover:bg-teal-400/60 rounded block"
                >
                  Add Dog
                </Link>
              </li>
              <li>
                <button
                  className="hover:underline py-4 px-6 bg-teal-600 hover:bg-teal-400/60 rounded block"
                  onClick={logout}
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/ccpedigree-rebuild/login"
                  className="py-4 px-6 bg-teal-600 hover:bg-teal-400/60 rounded block"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/ccpedigree-rebuild/signup"
                  className="py-4 px-6 bg-teal-600 hover:bg-teal-400/60 rounded block"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};
