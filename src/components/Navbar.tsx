import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  return (
    <nav className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xxl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <img
            src="src/assets/khula.png" // Adjust the path if needed based on your folder structure
            alt="Logo"
            className="h-8 w-auto object-contain"
          />

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Products"
              className="bg-white text-black placeholder-gray-400 rounded-[10px] border border-gray-300 py-2 px-4 w-60 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <ChevronDownIcon
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/home" className="hover:text-gray-300">
              Home
            </a>
            <a href="/quotes" className="hover:text-gray-300">
              Quotes
            </a>
            <a href="/orders" className="hover:text-gray-300">
              Orders
            </a>
            <a href="/support" className="hover:text-gray-300">
              Support
            </a>
            <a href="/account" className="hover:text-gray-300">
              Account
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Cart */}
          <div className="relative">
            <ShoppingCartIcon
              className="h-6 w-6 text-black hover:text-gray-300"
              aria-hidden="true"
            />
            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>

          {/* Logout */}
          <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar