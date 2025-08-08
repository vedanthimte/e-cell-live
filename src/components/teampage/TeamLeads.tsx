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
    name: "ANAND KATARIA",
    position: "Web & Technical Head",
    image: "/profile-placeholder.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/anand-katariya-709309225",
      instagram: "https://www.instagram.com/_anandkatariya?igsh=MTFxMm56bHhucXJldA==",
    },
  },
  {
    name: "SANIA RAUT",
    position: "Media & Content Head",
    image: "/profile-placeholder.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/sania-raut-0ba818206",
      instagram: "https://www.instagram.com/saeunaa_?igsh=a2c4anJrdXFtMWxz",
    },
  },
  {
    name: "KANAK GUPTA",
    position: "Marketing Head",
    image: "/profile-placeholder.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/kanak-gupta-99406730a",
      instagram: "https://www.instagram.com/kanak.guptaaa?igsh=ajgwbGlvMjZyZXhz",
    },
  },
  {
    name: "TANAY SAWWALAKHE",
    position: "Logistics Head",
    image: "/profile-placeholder.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/tanay-sawwalakhe-0a79a7290",
      instagram: "https://www.instagram.com/tanay_3011?igsh=cDFmMWoyMjc4d2Zj",
    },
  },
  {
    name: "RUTVIK BELE",
    position: "Events Head",
    image: "/profile-placeholder.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/rutvik-bele-559b24290",
      instagram: "https://www.instagram.com/rutvik_b07?igsh=MWo4aTd2MGd2cDdtcQ==",
    },
  },
  {
    name: "SATWIK KALE",
    position: "Design Head",
    image: "/profile-placeholder.jpg",
    socials: {
      linkedin: "NA",
      instagram: "https://www.instagram.com/stw1k/",
    },
  },
  {
    name: "RUTUJA NAIK",
    position: "PR Head",
    image: "/profile-placeholder.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/rutuja-naik22",
      instagram: "https://www.instagram.com/rutujaaanaik/",
    },
  },
  ];

  return (
    <section className="w-full bg-[#0E001B] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Meet Our Team Leads
          </h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            Pillars of Each Domain
          </p>
          <motion.div
            className="w-20 h-1 bg-[#8B5CF6] rounded-full mx-auto mt-6"
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
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamLeads.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[#1C0233] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#8B5CF6]/20 transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E001B] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#FFFFFF]">
                  {member.name}
                </h3>
                <p className="text-[#8B5CF6] mb-4">{member.position}</p>

                <div className="flex space-x-4">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D1D5DB] hover:text-[#8B5CF6] transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D1D5DB] hover:text-[#8B5CF6] transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
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
