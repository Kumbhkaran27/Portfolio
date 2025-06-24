import React from "react";

const ThemeProvider = ({ children }) => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default ThemeProvider;
