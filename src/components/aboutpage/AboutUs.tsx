"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TeamPhoto from "./pic/left.png"; // Replace with your image
import InnovationIllustration from "./pic/right.jpg"; // Replace with your image

const AboutUs = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full pt-30 bg-[#0E001B] py-16 sm:py-24 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#8B5CF6] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#D8AFFF] opacity-10 blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Us
          </h2>
          <div className="flex justify-center">
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#D8AFFF] rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          {/* Left Image */}
          <motion.div
            variants={item}
            className="lg:col-span-1 h-full flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-xl overflow-hidden border border-[#8B5CF6]/30 group">
              <Image
                src={TeamPhoto}
                alt="E-Cell team working together"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E001B]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Our Team
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={item}
            className="lg:col-span-1 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <p className="text-lg text-[#D1D5DB]">
                E-Cell, PRMIT&R is where ideas turn into action. We&apos;re a
                group of students who believe in creating, building, and making
                things happen. Our focus is on sparking entrepreneurial thinking
                through hands-on work, idea incubation, and real exposure to the
                startup world.
              </p>
              <p className="text-lg text-[#D1D5DB]">
                From Competitions to workshops, mentorship to startup showcases,
                we create opportunities for our students to learn, grow, and
                lead.
              </p>
              <p className="text-lg text-[#D1D5DB] font-medium">
                Here, every student isn&apos;t just a learner, they&apos;re a
                potential founder.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={item}
            className="lg:col-span-1 h-full flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-xl overflow-hidden border border-[#8B5CF6]/30 group">
              <Image
                src={InnovationIllustration}
                alt="Innovation and startup culture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E001B]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 p-6">
                <div className="bg-[#D8AFFF] text-[#0E001B] px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Innovation
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Innovation Icon */}
        <motion.div
          className="absolute bottom-20 left-1/4 hidden lg:block"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 backdrop-blur-sm border border-[#8B5CF6]/30 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-[#D8AFFF]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
