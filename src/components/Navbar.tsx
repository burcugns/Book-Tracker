import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-white via-gray-100 to-neutral-200 rounded-2xl shadow-md ring-1 ring-neutral-200 p-2 sm:p-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Book tracker logo */}
          <Link to="/readings" className="flex items-center space-x-2">
            <DocumentTextIcon className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-semibold tracking-tight text-emerald-700">
              Book Tracker
            </span>
          </Link>

          {/* Profile */}
          <Menu as="div" className="relative">
            <MenuButton className="flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="https://www.gravatar.com/avatar/?d=mp&s=256"
                className="size-8 rounded-full bg-neutral-200"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 shadow-lg ring-1 ring-neutral-200 focus:outline-none data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <MenuItem>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition"
                >
                  Your profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition"
                >
                  Settings
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition"
                >
                  Sign out
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
