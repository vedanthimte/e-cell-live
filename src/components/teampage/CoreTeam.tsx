"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import mayur from "../teampics/mayur.jpg";
import priyanshu from "../teampics/priyanshu.jpg";
import jay from "../teampics/jay.jpg";
import prathmesh from "../teampics/prathmesh.jpg";
import om from "../teampics/om.jpg";

const CoreTeam = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const teamMembers = [
    {
      name: "MAYUR DOIJOD",
      position: "President",
      image: mayur,
      socials: {
        linkedin: "https://linkedin.com/in/mayur-doijod-515514290",
        instagram:
          "https://www.instagram.com/mayur.doijod?igsh=MXYwYTVocWIyaGZtZQ==",
      },
    },
    {
      name: "PRIYANSHU THAKARE",
      position: "Vice-President",
      image: priyanshu,
      socials: {
        linkedin: "https://linkedin.com/in/priyanshu-thakare",
        instagram:
          "https://www.instagram.com/priyaannsshhu?igsh=Z3loOWlrazJ5NmJ5",
      },
    },
    {
      name: "JAY NAGPURE",
      position: "Operations Head",
      image: jay,
      socials: {
        linkedin: "https://linkedin.com/in/jay-nagpure-7bb8492a0",
        instagram:
          "https://www.instagram.com/jayynagpure17?igsh=azhieTlkNjVycXVs",
      },
    },
    {
      name: "PRATHMESH ARU",
      position: "General Secretary",
      image: prathmesh,
      socials: {
        linkedin: "https://linkedin.com/in/prathmesh-aru-437b97215",
        instagram:
          "https://www.instagram.com/_prathm_02_?igsh=MXRsenlkbWIxajYybQ==",
      },
    },
    {
      name: "OM KHARAD",
      position: "Student Advisor & Former President",
      image: om,
      socials: {
        linkedin: "https://linkedin.com/in/omkharad10x06",
        instagram:
          "https://www.instagram.com/omkharad10x?igsh=MWtyMzBrcGc0cG5kNA==",
      },
    },
  ];

  return (
    <section className="w-full bg-[#0E001B] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-16 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Meet Our Core Team
          </h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            The creative minds driving our vision forward
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[#1C0233] rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 flex flex-col items-center"
            >
              {/* Circular Image */}
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-2 border-[#8B5CF6]"
                />
              </div>

              {/* Name & Position */}
              <h3 className="text-xl font-semibold text-[#FFFFFF]">
                {member.name}
              </h3>
              <p className="text-[#8B5CF6] mb-4">{member.position}</p>

              {/* Socials */}
              <div className="flex space-x-4">
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D1D5DB] hover:text-[#8B5CF6] transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 
                    5v14c0 2.761 2.239 5 5 
                    5h14c2.762 0 5-2.239 
                    5-5v-14c0-2.761-2.238-5-5-5zm-11 
                    19h-3v-11h3v11zm-1.5-12.268c-.966 
                    0-1.75-.79-1.75-1.764s.784-1.764 
                    1.75-1.764 1.75.79 1.75 
                    1.764-.783 1.764-1.75 1.764zm13.5 
                    12.268h-3v-5.604c0-3.368-4-3.113-4 
                    0v5.604h-3v-11h3v1.765c1.396-2.586 
                    7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreTeam;
