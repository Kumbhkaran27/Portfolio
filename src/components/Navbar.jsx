import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 bg-clip-text text-transparent">
          Pankaj Jagtap
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-700 font-medium transition-colors duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-pink-600 hover:via-pink-700 hover:to-purple-900"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-gray-700 font-medium transition-colors duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-pink-600 hover:via-pink-700 hover:to-purple-900"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
