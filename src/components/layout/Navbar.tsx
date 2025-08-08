"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "../public/E-CELL.png";

// Color palette from the table
const colors = {
  midnightPurple: "#0E001B",
  royalViolet: "#8B5CF6",
  lavenderGlow: "#B497FF",
  electricWhite: "#FFFFFF",
  coolGray: "#D1D5DB",
  deepIndigo: "#1C0233",
  neonLilac: "#D8AFFF",
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Blogs", href: "/blogs" },
];

const linkHoverVariants = {
  hover: { color: colors.neonLilac, transition: { duration: 0.18 } },
};
const underlineVariants = {
  rest: { width: 0 },
  hover: { width: "100%" },
};
const dropdownVariants = {
  hidden: { opacity: 0, y: -16, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.97 },
};
const mobileMenuVariants = {
  enter: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="w-full bg-[#0E001B] border-b border-[#B497FF]/30 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90"
      style={{ backgroundColor: colors.midnightPurple }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center group">
            <motion.img
              src={Logo.src}
              alt="E-Cell Logo"
              width={50}
              height={50}
              className="group-hover:rotate-6 transition-transform duration-300"
            />
            <div className="md:block ml-3">
              <motion.h1
                className="text-white font-bold text-lg"
                whileHover={{ x: 2 }}
                style={{ color: colors.electricWhite }}
              >
                E-Cell{" "}
                <span
                  className="font-medium"
                  style={{ color: colors.coolGray }}
                >
                  PRMIT&R
                </span>
              </motion.h1>
              <motion.p
                className="text-xs mt-0.5"
                whileHover={{ x: 2 }}
                style={{ color: colors.neonLilac }}
              >
                Empowering Student Entrepreneurs
              </motion.p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} passHref>
                  <motion.div
                    className="relative group"
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.span
                      className="relative cursor-pointer text-sm lg:text-base font-medium transition-colors duration-200 focus:outline-none"
                      variants={linkHoverVariants}
                      tabIndex={0}
                      style={{ color: colors.coolGray }}
                    >
                      {link.name}
                    </motion.span>
                    <motion.div
                      className="absolute left-0 -bottom-1 h-0.5 rounded-full"
                      variants={underlineVariants}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      style={{ backgroundColor: colors.neonLilac }}
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              tabIndex={0}
              style={{
                color: colors.coolGray,
              }}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="md:hidden border-t overflow-hidden"
            style={{
              backgroundColor: colors.midnightPurple,
              borderColor: `${colors.lavenderGlow}30`,
            }}
          >
            <div className="px-2 pt-2 pb-5 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} passHref>
                  <motion.a
                    className="block px-4 py-3 rounded-lg text-base font-medium mx-1 transition-colors"
                    whileHover={{
                      backgroundColor: `${colors.royalViolet}26`,
                      x: 8,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                    tabIndex={0}
                    style={{ color: colors.coolGray }}
                  >
                    {link.name}
                  </motion.a>
                </Link>
              ))}
              <div
                className="pt-3 pb-1 border-t mx-3"
                style={{ borderColor: `${colors.lavenderGlow}30` }}
              >
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
