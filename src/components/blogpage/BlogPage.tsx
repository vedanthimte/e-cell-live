"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
      id: 1,
      title: "The Student Startup Mindset: Lessons from Campus Founders",
      excerpt:
        "How student entrepreneurs are building ventures while balancing academics - insights from our incubator program",
      date: "May 15, 2023",
      author: "Rahul Sharma",
      image: "/blog1.jpg",
      link: "https://linkedin.com/company/ecell-prmitr/posts/123",
      category: "Startups",
    },
    {
      id: 2,
      title: "Why Hackathons Matter More Than You Think",
      excerpt:
        "Beyond coding marathons - how hackathons build essential entrepreneurial skills",
      date: "April 2, 2023",
      author: "Neha Patel",
      image: "/blog2.jpg",
      link: "https://linkedin.com/company/ecell-prmitr/posts/456",
      category: "Events",
    },
    {
      id: 3,
      title: "The Future of EdTech: Student Perspectives",
      excerpt:
        "How emerging technologies will transform education - views from our campus innovation survey",
      date: "March 18, 2023",
      author: "Arjun Singh",
      image: "/blog3.jpg",
      link: "https://linkedin.com/company/ecell-prmitr/posts/789",
      category: "Tech",
    },
    {
      id: 4,
      title: "Building an Entrepreneurial Culture on Campus",
      excerpt:
        "5 initiatives that helped us foster innovation among 2000+ students this year",
      date: "February 5, 2023",
      author: "E-Cell Team",
      image: "/blog4.jpg",
      link: "https://linkedin.com/company/ecell-prmitr/posts/101",
      category: "Team",
    },
    {
      id: 5,
      title: "From Classroom to Boardroom: Student Founder Stories",
      excerpt:
        "Inspiring journeys of 3 student entrepreneurs who launched successful ventures",
      date: "January 22, 2023",
      author: "Priya Gupta",
      image: "/blog5.jpg",
      link: "https://linkedin.com/company/ecell-prmitr/posts/112",
      category: "Stories",
    },
    {
      id: 6,
      title: "The Investor's Perspective: What They Look For",
      excerpt:
        "Key takeaways from our recent investor panel on early-stage startup funding",
      date: "December 10, 2022",
      author: "Vikram Joshi",
      image: "/blog6.jpg",
      link: "https://linkedin.com/company/ecell-prmitr/posts/131",
      category: "Startups",
    },
  ];

  const categories = ["All", "Startups", "Events", "Tech", "Team", "Stories"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0E001B]">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#8B5CF6]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif"
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
            Read insights, reflections, and stories straight from our LinkedIn
            publications
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://linkedin.com/company/ecell-prmitr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-[#8B5CF6] text-[#8B5CF6] rounded-full hover:bg-[#8B5CF6] hover:text-white transition-colors hover:shadow-[0_0_15px_#8B5CF6]/30"
            >
              Visit our LinkedIn
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
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
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 font-serif">
                    {post.title}
                  </h3>
                  <p className="text-[#D1D5DB] mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#8B5CF6]">{post.date}</p>
                      <p className="text-sm text-[#D1D5DB]">{post.author}</p>
                    </div>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#8B5CF6] hover:text-[#FFFFFF] px-4 py-2 rounded-full border border-[#8B5CF6] hover:bg-[#8B5CF6] transition-colors"
                    >
                      Read on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
