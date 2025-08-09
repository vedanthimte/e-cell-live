"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const UpcomingEvents = () => {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const events = [
    {
      id: 1,
      name: "Recruitment of Team Members",
      date: "Aug 14, 2025",
      description: "Join us to build the future of innovation at E-Cell!",
      cta: "Register",
    },
    {
      id: 2,
      name: "PitchFest'25 ",
      date: "Aug 19, 2025",
      description: "Showcase your startup ideas and get feedback from industry experts.",
      cta: "Coming soon",
    },
  ];

  return (
    <section className="w-full bg-[#0E001B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl pt-15 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            Stay updated with our latest initiatives and opportunities
          </p>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#D8AFFF] rounded-full mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Timeline Line (Desktop Only) */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-[#1C0233] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#8B5CF6]/30 border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300 relative z-10"
            >
              {/* Event Dot (Desktop Timeline) */}
              <div className="hidden lg:block absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#8B5CF6] border-2 border-[#D8AFFF]"></div>

              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#8B5CF6]/10 p-2 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-[#8B5CF6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFFFFF] mb-1">
                      {event.name}
                    </h3>
                    <p className="text-[#8B5CF6] font-medium">{event.date}</p>
                  </div>
                </div>

                <p className="text-[#D1D5DB] mb-6">{event.description}</p>

                <Link
                  href="#"
                  className="inline-block px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#1C0233] text-[#FFFFFF] hover:shadow-[0_0_15px_#8B5CF6]/50 transition-all duration-300"
                >
                  {event.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
      </div>
    </section>
  );
};

export default UpcomingEvents;
