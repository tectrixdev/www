import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white/10 p-4 text-center font-bold text-white backdrop-blur-lg">
      <p>
        &copy; {new Date().getFullYear()} Joran Hennion. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
