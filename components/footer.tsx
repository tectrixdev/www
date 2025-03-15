import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <Link
      href="https://raw.githubusercontent.com/tectrixdev/portfolio/refs/heads/main/LICENSE"
      title="License (info)"
    >
      <footer className="w-full bg-white/10 p-4 text-center font-bold text-white backdrop-blur-lg">
        <p>
          &copy; {new Date().getFullYear()} Joran Hennion. All rights reserved.
        </p>
      </footer>
    </Link>
  );
};

export default Footer;
