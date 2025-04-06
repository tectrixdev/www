import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <Link
      className="select-none"
      href="https://raw.githubusercontent.com/tectrixdev/www/refs/heads/main/LICENSE"
      title="License (info)"
      draggable={false}
    >
      <footer className="w-full bg-black p-4 text-center font-bold text-white">
        <p>
          &copy; {new Date().getFullYear()} Joran Hennion. All rights reserved.
        </p>
      </footer>
    </Link>
  );
};

export default Footer;
