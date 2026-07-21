'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBlogsOpen, setIsMobileBlogsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Authentication check and login/logout handling
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleLoginSuccess = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener('loginSuccess', handleLoginSuccess);
    return () => {
      window.removeEventListener('loginSuccess', handleLoginSuccess);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    router.push("/login");
  };

  // Navigation items with conditional dashboard/add job
  const navItems = [
    { name: "Home", path: "/" },
    // { name: "Services", path: "/services" },
    { name: "All Jobs", path: "/all-jobs" },
    { name: "About", path: "/about-us" }, 
    { name: "Contact", path: "/contact-us" },
    { name: "Blogs", path: "/blogs1" },

    ...(isLoggedIn ? [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Add Job", path: "/AddJob" },
      { name: "Messages", path: "/messages" },
    ] : []),
  ];

  // Blog items (18 items)
  // const blogItems = Array.from({ length: 18 }, (_, i) => ({
  //   name: `Blog Post ${i + 1}`,
  //   path: `/blog/blog${i + 1}`
  // }));
  // Blog items (18 items)
const blogItems = [
  { name: "Frontend Imp Questions", path: "/blog/blog1" },
  { name: "CDN Explanation", path: "/blog/blog2" },
  { name: "BMI Calculator", path: "/blog/blog3" },
  { name: "First React Program", path: "/blog/blog4" },
  { name: "Nested Elements", path: "/blog/blog5" },
  { name: "Script Placement", path: "/blog/blog6" },
  { name: "DOM Override", path: "/blog/blog7" },
  { name: "Emmet", path: "/blog/blog8" },
  { name: "Framework Vs Library", path: "/blog/blog9" },
  { name: "Why React Named", path: "/blog/blog10" },
  { name: "React Vs ReactDOM", path: "/blog/blog11" },
  { name: "Real Vs Virtual DOM", path: "/blog/blog12" },
  { name: "Real Vs Virtual DOM", path: "/blog/blog13" },
  { name: "Async Vs Defer", path: "/blog/blog14" },
  { name: "NPM Explanation", path: "/blog/blog15" },
  { name: "Package JSON", path: "/blog/blog16" },
  { name: "Bundler", path: "/blog/blog17" },
  { name: "Hot Module Replacement", path: "/blog/blog18" }
];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-sm" >
        <div className=" mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              {/* Logo */}
                    <Link href="/">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  className="block h-8 w-auto"
                  src="/icon-modified.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <span className="ml-2 text-xl font-bold text-gray-800">CareerValore</span>
              </div>
               </Link>

              {/* Desktop Menu */}
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navItems.map((item,index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Blogs Dropdown */}
                  {/* <div className="relative group">
                    <button className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                      Blogs
                      <svg
                        className="ml-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div className="absolute left-0 mt-2 w-screen max-w-6xl bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                        {Array.from({ length: 3 }).map((_, colIndex) => (
                          <div key={colIndex}>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                              {colIndex === 0 ? 'Latest Posts' : colIndex === 1 ? 'Popular Posts' : 'Featured Posts'}
                            </h3>
                            <ul className="space-y-3">
                              {blogItems
                                .slice(colIndex * 6, (colIndex + 1) * 6)
                                .map((blog,index) => (
                                  <li key={index}>
                                    <Link href={blog.path} className="text-gray-600 hover:text-indigo-600">
                                      {blog.name}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Side - Login/Signup/Logout & Mobile Menu Button */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:flex sm:items-center">
                {!isLoggedIn ? (
                  <>
                    {/* <Link href="/login" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                      Login
                    </Link> */}
                    {/* <Link
                      href="/signup"
                      className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                    >
                      Sign Up
                    </Link> */}
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="ml-4 flex items-center text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Logout
                  </button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item,index) => (
              <Link
                key={index}
                href={item.path}
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Blogs Dropdown */}
            <div className="relative">
              <button
                className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                onClick={() => setIsMobileBlogsOpen(!isMobileBlogsOpen)}
              >
                Blogs
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className={`px-4 py-2 ${isMobileBlogsOpen ? 'block' : 'hidden'}`}>
                {blogItems.map((blog,index) => (
                  <Link
                    key={index}
                    href={blog.path}
                    className="text-gray-600 hover:text-indigo-600 block px-3 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {blog.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Auth Links */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 space-y-2 flex-col">
                {!isLoggedIn ? (
                  <>
                    <Link
                      href="/login"
                      className="block w-full text-center text-gray-900 bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    {/* <Link
                      href="/signup"
                      className="block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link> */}
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-center text-gray-900 bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
                  >
                    <LogOut className="h-5 w-5 inline mr-2" />
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
