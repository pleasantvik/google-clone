import React from "react";

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600">
      <p>copyright &copy; {new Date().getFullYear()} Adedayo Victor</p>
    </footer>
  );
};
