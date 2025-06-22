import { Link } from "react-router";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Header = () => {
  const handleMenuToggle = () => {
    const mobileNav = document.querySelector("nav.mobile");
    if (mobileNav) {
      mobileNav.classList.toggle("hidden");
    }
  };

  return (
    <header className="flex justify-between align-center bg-blue-500 text-white p-4">
      <div className="flex">
        <Link className="place-self-center" to="/ccpedigree-rebuild">
          website logo text
        </Link>
      </div>
      <div
        className="md:hidden cursor-pointer hover:bg-gray-700 p-2 rounded"
        onClick={handleMenuToggle}
      >
        {/* Hamburger Menu Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {/* Desktop Navigation */}
      <DesktopNavigation />

      {/* Mobile Navigation */}
      <MobileNavigation handleMenuToggle={handleMenuToggle} />
    </header>
  );
};
