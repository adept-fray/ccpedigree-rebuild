import { Link } from "react-router";

export const DesktopNavigation = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="md:flex justify-between items-center hidden">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/list-my-dogs" className="text-white hover:underline">
              My Dogs
            </Link>
          </li>
          <li>
            <Link to="/add-dog" className="text-white hover:underline">
              Add Dog
            </Link>
          </li>
        </ul>
        <button className=" text-white">Menu</button>
      </nav>
    </>
  );
};
