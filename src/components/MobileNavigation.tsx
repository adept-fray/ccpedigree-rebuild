import { Link } from "react-router";

export const MobileNavigation = ({
  handleMenuToggle,
}: {
  handleMenuToggle: any;
}) => {
  return (
    <>
      {/* Mobile Navigation */}
      <nav
        className="mobile hidden absolute right-0 top-0 p-4 bg-blue-600/20 drop-shadow-xl/50 w-full h-full backdrop-blur-xs sm:w-3/4"
        onClick={handleMenuToggle}
      >
        <ul>
          <li className="flex items-end justify-end py-2 pr-2">
            <span className="cursor-pointer text-white hover:text-gray-800 py-4 px-6 bg-teal-600 hover:bg-teal-400 rounded">
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
            <Link to="/" className="py-4 px-6 bg-teal-600 rounded block">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/list-my-dogs"
              className="py-4 px-6 bg-teal-600 rounded block"
            >
              My Dogs
            </Link>
          </li>
          <li>
            <Link to="/add-dog" className="py-4 px-6 bg-teal-600 rounded block">
              Add Dog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
