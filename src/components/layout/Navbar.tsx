"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "../public/E-CELL.png";

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
const mobileMenuVariants = {
  enter: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="fixed top-4 w-full flex justify-center z-50 px-4">
      <motion.nav
        className="flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full border"
        initial={false}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(14, 0, 27, 0.85)"
            : "rgba(14, 0, 27, 0.65)",
          scale: isScrolled ? 1.02 : 1,
          boxShadow: isScrolled
            ? "0 8px 25px rgba(0,0,0,0.25)"
            : "0 4px 15px rgba(0,0,0,0.15)",
          backdropFilter: "blur(5px)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          borderColor: `${colors.lavenderGlow}30`,
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.img
            src={Logo.src}
            alt="E-Cell Logo"
            width={50}
            height={50}
            className="group-hover:rotate-6 transition-transform duration-300"
          />
          <div className="ml-2 mb-2 sm:block">
            <motion.h1
              className="text-white font-bold text-lg"
              whileHover={{ x: 2 }}
              style={{ color: colors.electricWhite }}
            >
              E-Cell{" "}
              <span className="font-medium" style={{ color: colors.coolGray }}>
                PRMIT&R
              </span>
            </motion.h1>
            <motion.p
              className="hidden md:inline text-sm"
              whileHover={{ x: 2 }}
              style={{ color: colors.neonLilac }}
            >
              Empowering Student Entrepreneurs
            </motion.p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <motion.div
                  className="relative group"
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.span
                    className="relative cursor-pointer text-sm lg:text-base font-medium"
                    variants={linkHoverVariants}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center p-2 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="absolute top-[70px] w-[90%] rounded-2xl border overflow-hidden"
            style={{
              backgroundColor: "rgba(14, 0, 27, 0.85)",
              borderColor: `${colors.lavenderGlow}30`,
              backdropFilter: "blur(18px)",
            }}
          >
            <div className="px-2 pt-2 pb-5 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} passHref>
                  <motion.a
                    className="block px-4 py-3 rounded-lg text-base font-medium mx-1"
                    whileHover={{
                      backgroundColor: `${colors.royalViolet}26`,
                      x: 8,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: colors.coolGray }}
                  >
                    {link.name}
                  </motion.a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
