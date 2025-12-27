import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wr">
        <Link href="/" className="font-bold text-lg">🤖 Dev-Story</Link>
      <nav className="flex gap-4">
        <Link href="/about">About</Link>

        <Link href="/tutorials">Tutorials</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
