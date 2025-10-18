"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import banner1 from "./banner/id1.jpg";
import banner2 from "./banner/id2.png";
import banner3 from "./banner/id3.png";
import banner4 from "./banner/id4.png";
import banner5 from "./banner/id5.png";
const BlogPage = () => {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const blogPosts = [
    {
      id: "1",
      title: "Can a college idea ever become a million-dollar company?",
      excerpt:
        "How student entrepreneurs are building ventures while balancing academics - insights from our incubator program",
      date: "August 02, 2025",
      author: "E-Cell",
      image: banner1,
      category: "Stories",
    },
    {
      id: "2",
      title: "The Hidden Startup Inside Every College Event, Learning to Build from Zero",
      excerpt:
        "How organizing a college event is your first lesson in entrepreneurship.",
      date: "October 6, 2025",
      author: "E-Cell",
      image: banner2,
      category: "Campus Lessons",
    },
    {
      id: "3",
      title: "Team Chaos = Leadership School — Managing People Like a Founder",
      excerpt:
        "Why leading a college event is the best crash course in startup leadership.",
      date: "October 8, 2025",
      author: "E-Cell",
      image: banner3,
      category: "Leadership",
    },
    {
      id: "4",
      title: "The Budget Game — How Handling Event Money Teaches You Startup Finance",
      excerpt:
        "How college event budgeting is your first real-world finance lesson.",
      date: "October 10, 2025",
      author: "E-Cell",
      image: banner4,
      category: "Finance",
    },
    {
      id: "5",
      title: "The Aftermath — Feedback, Failure & the Growth Mindset",
      excerpt:
        "Why post-event reflection is the secret to entrepreneurial growth.",
      date: "October 12, 2025",
      author: "E-Cell",
      image: banner5,
      category: "Growth",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen pt-6 bg-[#0E001B]">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#8B5CF6]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            E-Cell Blogs
          </motion.h1>
          <motion.p
            className="text-lg text-[#D1D5DB] max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Read insights, reflections, and stories from our entrepreneurship journey
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Blog Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-[#1C0233] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blogs/${post.id}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                      {post.title}
                    </h3>
                    <p className="text-[#D1D5DB] mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#8B5CF6]">{post.date}</p>
                        <p className="text-sm text-[#D1D5DB]">{post.author}</p>
                      </div>
                      <button className="text-sm font-medium text-[#8B5CF6] hover:text-[#FFFFFF] px-4 py-2 rounded-full border border-[#8B5CF6] hover:bg-[#8B5CF6] transition-colors">
                        Read More
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
