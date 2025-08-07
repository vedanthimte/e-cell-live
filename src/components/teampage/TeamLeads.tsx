"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamLeads = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    hover: { y: -5, scale: 1.03 },
  };

  const teamLeads = [
    {
      name: "Aarav Patel",
      domain: "Technology",
      image: "/profile-placeholder.jpg",
      linkedin: "#",
    },
    {
      name: "Neha Sharma",
      domain: "Marketing",
      image: "/profile-placeholder.jpg",
      linkedin: "#",
    },
    {
      name: "Rohan Singh",
      domain: "Operations",
      image: "/profile-placeholder.jpg",
      linkedin: "#",
    },
    {
      name: "Priya Gupta",
      domain: "Public Relations",
      image: "/profile-placeholder.jpg",
      linkedin: "#",
    },
    {
      name: "Vikram Joshi",
      domain: "Events",
      image: "/profile-placeholder.jpg",
      linkedin: "#",
    },
    {
      name: "Ananya Reddy",
      domain: "Design",
      image: "/profile-placeholder.jpg",
      linkedin: "#",
    },
  ];

  return (
    <section className="w-full bg-[#0F172A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Team Leads
          </h2>
          <p className="text-lg text-[#E2E8F0]">Pillars of Each Domain</p>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#FCD34D] rounded-full mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {teamLeads.map((lead, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-[#1E293B] rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-[#8B5CF6]/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Profile Image with Glow Effect */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-6 group"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FCD34D] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#8B5CF6]/30 group-hover:border-[#FCD34D]/50 transition-all duration-300">
                    <Image
                      src={lead.image}
                      alt={lead.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Lead Info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {lead.name}
                  </h3>
                  <p className="text-[#8B5CF6] font-medium mb-4">
                    {lead.domain}
                  </p>

                  {/* LinkedIn Icon */}
                  {lead.linkedin && (
                    <a
                      href={lead.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 text-[#E2E8F0] hover:text-white transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamLeads;
