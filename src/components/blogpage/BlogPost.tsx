"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import blogPosts from "./blogData";

type Props = {
  id: string;
};

const BlogPost: React.FC<Props> = ({ id }) => {
  const post = blogPosts.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0E001B] flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-bold text-white">Blog Not Found</h1>
            <p className="text-[#D1D5DB] mt-4">The requested blog post does not exist.</p>
            <Link href="/blogs" className="mt-6 inline-block text-[#8B5CF6]">
              Back to Blogs
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E001B]">
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px]">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E001B]/40 via-[#0E001B]/70 to-[#0E001B]" />

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-[#8B5CF6] text-white mb-4 shadow-lg">{post.category}</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">{post.title}</h1>
            </motion.div>
          </div>
        </div>
      </div>

      <article className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center gap-4 sm:gap-6 pb-8 mb-8 border-b border-[#8B5CF6]/20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="#8B5CF6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <span className="text-[#D1D5DB] font-medium">{post.author}</span>
              </div>
            </div>

            <div className="h-12 w-px bg-[#8B5CF6]/20 hidden sm:block" />

            <div className="flex items-center gap-2 text-[#D1D5DB]">
              <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">{post.date}</span>
            </div>

            <div className="flex items-center gap-2 text-[#D1D5DB]">
              <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">{post.readTime}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="prose prose-lg prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              const isFirstParagraph = index === 0;
              return (
                <motion.p key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} className={`text-[#D1D5DB] mb-6 leading-relaxed ${isFirstParagraph ? "text-xl font-light text-[#E5E7EB] first-letter:text-5xl first-letter:font-bold first-letter:text-[#8B5CF6] first-letter:mr-2 first-letter:float-left" : "text-lg"}`}>
                  {paragraph}
                </motion.p>
              );
            })}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-12 pt-8 border-t border-[#8B5CF6]/20">
            <h3 className="text-white font-semibold mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              {["Entrepreneurship", "Startups", "Google", "Innovation", "Student Ventures"].map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm bg-[#1C0233] text-[#8B5CF6] rounded-full border border-[#8B5CF6]/30 hover:bg-[#8B5CF6] hover:text-white transition-colors cursor-pointer">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }} className="mt-8">
            <div className="bg-gradient-to-br from-[#1C0233] to-[#0E001B] rounded-2xl p-8 border border-[#8B5CF6]/20 shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Enjoyed this article?</h3>
                <p className="text-[#D1D5DB] mb-6 max-w-2xl mx-auto">Join the conversation about entrepreneurship and innovation. Share your thoughts and success stories with our community!</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="inline-flex items-center px-6 py-3 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-full font-medium hover:bg-[#8B5CF6] hover:text-white transition-all">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    Share Article
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }} className="mt-12 flex justify-center">
            <Link href="/blogs" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#D8AFFF] text-white rounded-full font-semibold hover:shadow-[0_0_30px_#8B5CF6]/60 transition-all transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Explore More Articles
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
