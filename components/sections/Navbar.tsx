"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About me" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact me" },
  ];

  const handleScroll = (id: string, e: any) => {
    e.preventDefault();
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-orange-500 font-extrabold text-xl tracking-wide">
          LOGO
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleScroll(l.id, e)}
              className={`text-sm transition font-medium ${
                active === l.id
                  ? "text-orange-500"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right Hire Me Button */}
        <a
          href="#contact"
          onClick={(e) => handleScroll("contact", e)}
          className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
