"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname)
  if(pathname.startsWith("/dashboard")) return <></>;
  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wr">
    <Link href="/" className="font-bold text-lg">🤖 Dev-Story</Link>
      <nav className="flex gap-4">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;
