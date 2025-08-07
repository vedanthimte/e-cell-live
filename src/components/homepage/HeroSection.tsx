"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../public/E-CELL.png";

const HeroSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0E001B] overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#8B5CF6] opacity-20 blur-3xl animate-float1"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#D8AFFF] opacity-15 blur-3xl animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 rounded-full bg-[#6D28D9] opacity-10 blur-3xl animate-float3"></div>
      </div>

      {/* Starfield Background (Optional) */}
      <div className="absolute inset-0 starfield"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between py-24 lg:py-0">
        {/* Left Column - Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:w-1/2 text-center lg:text-left z-10"
        >
          

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D8AFFF]">
              Igniting Innovation.
            </span>
            <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#D8AFFF] to-white">
              Inspiring Entrepreneurs.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg text-[#D1D5DB] max-w-lg mx-auto lg:mx-0 mb-10"
          >
            E-Cell, PRMIT&R is a student-run platform fostering innovation,
            startups, and a future driven by young entrepreneurs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link href="/register" passHref>
              <motion.a
                className="px-8 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white rounded-full font-medium shadow-lg hover:shadow-[#D8AFFF]/40 transition-all duration-300 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(216, 175, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Community
              </motion.a>
            </Link>
            <Link href="/events" passHref>
              <motion.a
                className="px-8 py-3 border-2 border-[#8B5CF6] text-[#D1D5DB] rounded-full font-medium hover:text-white hover:bg-[#8B5CF6]/10 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Events
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-16 lg:mt-0 z-10 flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            {/* Main Illustration */}
            <div className="relative">
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Abstract illustration of team brainstorming */}
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="url(#gradient1)"
                  opacity="0.8"
                />
                <defs>
                  <radialGradient
                    id="gradient1"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#0E001B" />
                  </radialGradient>
                </defs>

                {/* Abstract shapes representing innovation */}
                <path
                  d="M150,200 Q250,100 350,200 T250,400 T150,200"
                  fill="none"
                  stroke="#D8AFFF"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="50"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />

                {/* Floating elements */}
                <motion.circle
                  cx="200"
                  cy="150"
                  r="10"
                  fill="#8B5CF6"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="300"
                  cy="350"
                  r="8"
                  fill="#D8AFFF"
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-[#D1D5DB] mb-2">Scroll Down</p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-6 h-6 text-[#D8AFFF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Custom styles */}
      <style jsx>{`
        .text-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .starfield {
          background-image: radial-gradient(
            circle,
            rgba(216, 175, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }

        .animate-float1 {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float 10s ease-in-out infinite reverse;
        }

        .animate-float3 {
          animation: float 12s ease-in-out infinite 2s;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, 20px) rotate(5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
