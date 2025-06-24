import React from "react";

const Navbar = () => {
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
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-tr from-pink-600 via-pink-700 to-purple-900 bg-clip-text text-transparent mb-2 md:mb-0">
          Pankaj Jagtap
        </h1>
        <ul className="flex flex-wrap justify-center space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
