"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import teamImage from "./pic/team.jpg"; // Adjust the path as necessary

const WhoWeAre = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full bg-[#0E001B] py-20 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#8B5CF6] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#D8AFFF] opacity-10 blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Text Content */}
          <motion.div variants={item} className="lg:w-1/2">
            {/* Section Title */}
            <div className="mb-10">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Who Are We?
                <motion.span
                  className="block w-20 h-1 bg-[#8B5CF6] mt-4 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div variants={item}>
              <p className="text-lg text-[#D1D5DB] mb-6 max-w-3xl">
                E-Cell, PRMIT&amp;R is built by students, for students. We exist
                to back ideas, push boundaries, and turn sparks of inspiration
                into startups that matter.
              </p>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-3xl">
                Here, it&apos;s not just about learning entrepreneurship,
                it&apos;s about living it.
              </p>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-3xl">
                We run workshops, connect you with mentors, open doors to
                networks, and put you in situations where you have to think,
                build, and lead.
              </p>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-3xl">
                This is a space where action matters more than talk, and where
                students aren&apos;t waiting for the future, they&apos;re
                creating it.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              variants={item}
              className="relative pl-2 border-l-2 border-[#8B5CF6]"
            >
              <p className="text-[#D8AFFF] italic text-xl font-light">
                &quot;Built by dreamers, driven by doers.&quot;
              </p>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            variants={item}
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square w-full max-w-xl mx-auto">
              <Image
                src={teamImage}
                alt="E-Cell team collaborating"
                fill
                className="object-contain"
              />
              {/* Floating elements */}
              <motion.div
                className="absolute top-20 -left-4 w-8 h-8 rounded-full bg-[#8B5CF6] opacity-70"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-16 -right-4 w-6 h-6 rounded-full bg-[#D8AFFF] opacity-70"
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mt-20 opacity-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default WhoWeAre;
