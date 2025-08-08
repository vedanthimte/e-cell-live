"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Timeline = () => {
  const [layout, setLayout] = useState<"vertical" | "horizontal">("vertical");

  const events = [
    {
      date: "Aug 28, 2024",
      title: "Founding Date",
      description:
        "Founded on August 28, 2024, the Entrepreneurship Cell of PRMIT&R was established to cultivate an innovation-driven ecosystem on campus. Since our inception, we have been dedicated to nurturing entrepreneurial talent, fostering creative thinking, and empowering students to transform their ideas into viable business ventures.",
      type: "Foundation",
    },
    {
      date: "Sep 5, 2024",
      title: "RECRUITMENT'24",
      description:
        "First Recruitment Drive - September 5, 2024. Just one week after our founding, E-Cell PRMIT&R conducted its inaugural recruitment drive on September 5, 2024. This milestone event marked the beginning of building our dynamic team of passionate students committed to entrepreneurship and innovation. The recruitment brought together enthusiastic minds ready to contribute to our mission of fostering startup culture and entrepreneurial excellence on campus.",
      type: "Recruitment",
    },
    {
      date: "Oct 4, 2024",
      title: "Pitch Fest'24",
      description:
        "Pitch-Fest is PRMIT&R E-Cell's flagship entrepreneurship event that empowers students to showcase innovative business ideas and startup concepts. Participants present their ventures to expert judges including faculty, industry professionals, and successful entrepreneurs, creating a dynamic platform for fostering entrepreneurial thinking and innovation on campus.",
      type: "Competition",
    },
    {
      date: "Dec 18, 2024",
      title: "ILLUMINATE'24",
      description:
        "ILLUMINATE is an intensive 5-6 hour Entrepreneurship Workshop featuring expert speaker sessions, case study training, and hands-on business model development. Led by seasoned entrepreneurs and experts from IIT Bombay, this comprehensive workshop covers the fundamentals of entrepreneurship, business model creation, marketing strategies, and financial planning to equip students with essential startup knowledge.",
      type: "Workshop",
    },
  ];

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
    <section className="w-full bg-[#0E001B] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Timeline
          </motion.h2>
          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setLayout("vertical")}
              className={`px-4 py-2 rounded-full ${
                layout === "vertical"
                  ? "bg-[#8B5CF6] text-white"
                  : "bg-transparent text-[#D1D5DB] border border-[#8B5CF6]"
              }`}
            >
              Vertical View
            </button>
            <button
              onClick={() => setLayout("horizontal")}
              className={`px-4 py-2 rounded-full ${
                layout === "horizontal"
                  ? "bg-[#8B5CF6] text-white"
                  : "bg-transparent text-[#D1D5DB] border border-[#8B5CF6]"
              }`}
            >
              Horizontal View
            </button>
          </motion.div>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#D8AFFF] rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Vertical Timeline */}
        {layout === "vertical" && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8B5CF6] to-[#D8AFFF]"></div>

            {/* Events */}
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "pr-8 pl-16" : "pl-8 pr-16"
                }`}
              >
                {/* Event Dot */}
                <div
                  className={`absolute top-4 w-4 h-4 rounded-full bg-[#8B5CF6] border-2 border-[#D8AFFF] ${
                    index % 2 === 0
                      ? "right-0 transform translate-x-1/2"
                      : "left-0 transform -translate-x-1/2"
                  }`}
                ></div>

                {/* Event Card */}
                <div
                  className={`p-6 rounded-xl bg-[#1C0233] transition-all duration-300 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="text-sm font-bold text-[#8B5CF6] mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-[#D1D5DB] mb-2">{event.description}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#8B5CF6]/20 text-[#D8AFFF]">
                    {event.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Horizontal Timeline */}
        {layout === "horizontal" && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#D8AFFF] hidden sm:block"></div>

            {/* Events */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-4">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative sm:w-1/5"
                >
                  {/* Event Dot */}
                  <div className="absolute left-1/2 top-1/2 sm:top-0 sm:left-0 sm:right-0 sm:mx-auto w-4 h-4 rounded-full bg-[#8B5CF6] border-2 border-[#D8AFFF] transform -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 sm:translate-y-0 z-10"></div>

                  {/* Event Card */}
                  <div className="p-4 sm:p-6 rounded-xl bg-[#1C0233] transition-all duration-300 mt-6 sm:mt-8 text-center">
                    <div className="text-xs sm:text-sm font-bold text-[#8B5CF6] mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#FFFFFF] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] mb-2 hidden sm:block">
                      {event.description}
                    </p>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-[#8B5CF6]/20 text-[#D8AFFF]">
                      {event.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
