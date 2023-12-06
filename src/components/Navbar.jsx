import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/auth";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signout();
    navigate("/signin");
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-10">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div
            className="flex flex-1 items-start justify-start sm:items-stretch sm:justify-start"
            onClick={() => navigate("/")}
          >
            <div className="flex flex-shrink-0 place-content-start">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              {auth.user ? (
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://gravatar.com/avatar/07118d0221d3e1f533e1ec77098e3676?s=400&d=robohash&r=x"
                      alt=""
                    />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSignOut}
                  className="block rounded-md bg-white px-4 py-2 text-sm text-gray-700"
                  tabIndex="-1"
                >
                  Sign in
                </button>
              )}

              {showDropdown ? (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <Link
                    to="/me"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/me/settings"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
