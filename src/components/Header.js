"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, Menu, X, LogOut } from "lucide-react";
import { Avatar } from "@mui/material";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Initial check for token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    // Listen for login success event
    const handleLoginSuccess = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener('loginSuccess', handleLoginSuccess);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('loginSuccess', handleLoginSuccess);
    };
  }, []); // Empty dependency array since we only want this to run on mount/unmount

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    router.push("/login");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    ...(isLoggedIn ? [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Add Job", path: "/AddJob" },
    ] : []),
  ];

  return (
    <header className="sticky top-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Avatar alt="Logo" src="./logo.jpg" sx={{ width: 40, height: 40 }} />
          </Link>
          {navItems.map((item) => (
            <button
              key={item.name}
              className="hover:text-green-400"
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          {isLoggedIn && (
            <button onClick={handleLogout}>
              <LogOut className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-gray-800 md:hidden z-[100] transform transition-transform duration-300 ease-in-out"
            style={{ 
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'
            }}
          >
            <div className="p-4 h-full flex flex-col">
              <button className="self-end mb-8" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
              <nav className="flex flex-col space-y-4 flex-grow">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    className="text-lg text-left"
                    onClick={() => {
                      router.push(item.path);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}