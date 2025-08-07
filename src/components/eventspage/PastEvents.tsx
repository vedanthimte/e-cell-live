"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const PastEvents = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  type EventType = {
    id: number;
    name: string;
    date: string;
    summary: string;
    image: string;
    category: string;
  };
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const pastEvents = [
    {
      id: 1,
      name: "Startup Conclave 2023",
      date: "June 2023",
      summary: "Annual flagship event featuring 50+ startups and investors",
      image: "/event1.jpg",
      category: "Conference",
    },
    {
      id: 2,
      name: "Hacknovate 2.0",
      date: "March 2023",
      summary: "36-hour hackathon with 200+ participants",
      image: "/event2.jpg",
      category: "Hackathon",
    },
    {
      id: 3,
      name: "Founder's Fireside",
      date: "January 2023",
      summary: "Intimate conversations with successful entrepreneurs",
      image: "/event3.jpg",
      category: "Workshop",
    },
    {
      id: 4,
      name: "Investor Pitch Day",
      date: "November 2022",
      summary: "Student startups pitched to angel investors",
      image: "/event4.jpg",
      category: "Pitching",
    },
    {
      id: 5,
      name: "Ideathon 2022",
      date: "September 2022",
      summary: "Idea validation competition with 100+ entries",
      image: "/event5.jpg",
      category: "Competition",
    },
    {
      id: 6,
      name: "Startup 101 Workshop",
      date: "August 2022",
      summary: "Beginner's guide to launching your venture",
      image: "/event6.jpg",
      category: "Workshop",
    },
  ];

  const filteredEvents =
    activeFilter === "All"
      ? pastEvents
      : pastEvents.filter((event) => event.category === activeFilter);

  const categories = [
    "All",
    ...new Set(pastEvents.map((event) => event.category)),
  ];

  return (
    <section className="w-full bg-[#020617] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Past Events</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A glimpse into what we've achieved together
          </p>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#FCD34D] rounded-full mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Category Filters */}
        

        {/* Events Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#8B5CF6]/20 cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              {/* Event Image with Overlay */}
              <div className="relative aspect-video">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Event Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-[#8B5CF6]"
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
                  <span className="text-sm text-[#8B5CF6]">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {event.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{event.summary}</p>
                <button className="text-sm font-medium text-white px-4 py-2 rounded-full bg-[#8B5CF6]/80 hover:bg-[#8B5CF6] transition-colors border border-[#8B5CF6] hover:shadow-[0_0_15px_#8B5CF6]/50">
                  View Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Event Detail Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1E293B] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative aspect-video">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.name}
                fill
                className="object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                onClick={() => setSelectedEvent(null)}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-[#8B5CF6]"
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
                <span className="text-[#8B5CF6]">{selectedEvent.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedEvent.name}
              </h3>
              <p className="text-gray-300 mb-6">{selectedEvent.summary}</p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">
                  Event Highlights
                </h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Featured 10+ industry expert speakers</li>
                  <li>200+ participants from across the region</li>
                  <li>5 student startups received funding</li>
                </ul>
              </div>
              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-[#8B5CF6] text-white rounded-full hover:bg-[#7C3AED] transition-colors">
                  View Event Photos
                </button>
                <button className="px-6 py-3 border border-[#8B5CF6] text-[#8B5CF6] rounded-full hover:bg-[#8B5CF6]/10 transition-colors">
                  See Similar Events
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </div>
    </section>
  );
};

export default PastEvents;
