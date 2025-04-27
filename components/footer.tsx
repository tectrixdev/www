import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <Link
      className="select-none no-underline"
      href="https://raw.githubusercontent.com/tectrixdev/www/refs/heads/main/LICENSE"
      title="License (info)"
      draggable={false}
    >
      <footer className="w-full bg-black p-4 font-bold text-white">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Joran Hennion. All rights reserved.
        </p>
      </footer>
    </Link>
  );
};

export default Footer;
