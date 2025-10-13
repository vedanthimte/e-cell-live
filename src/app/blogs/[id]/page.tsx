"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import banner1 from "@/components/blogpage/banner/id1.jpg";

const BlogPostPage = () => {
  const params = useParams();
  const blogId = params.id as string;

  const blogPosts = [
    {
      id: "1",
      title: "Can a college idea ever become a million-dollar company?",
      excerpt:
        "How student entrepreneurs are building ventures while balancing academics - insights from our incubator program",
      date: "August 02, 2025",
      author: "E-Cell PRMIT&R",
      image: banner1,
      category: "Stories",
      readTime: "5 min read",
      content: "The entire concept of E-Cell, PRMIT&R revolves around student-led, startups-ventures founded by students or initiated on college campuses. But you might wonder: Can a college idea ever become a million-dollar company?\n\nThere are numerous examples of college ideas that have evolved into million or even billion-dollar companies. You might be surprised to learn that Google was once just a college idea.\n\nToday, Google is a global tech giant with a market cap of approximately $2.33 trillion and processes over 70% of all online searches worldwide. Yet, it all started as a simple idea on a college campus.\n\nHere's the story of Google, how a college idea became a trillion-dollar empire.\n\nFounded on September 4, 1998, by Stanford University PhD students Larry Page and Sergey Brin, Google began as a research project in 1996 called BackRub. In their Stanford dorm room, Page and Brin developed the PageRank algorithm to improve search results, and Google.com officially launched in 1998. The core business web search was monetized through advertising, and the company quickly caught the attention of top investors.\n\nAn initial check for $100,000 from Sun Microsystems co-founder Andy Bechtolsheim helped jump-start Google, followed by a $25 million venture funding round led by Kleiner Perkins and Sequoia Capital in June 1999. Google went public in 2004 and later restructured under the parent company Alphabet Inc. in 2015.\n\nDo you know of a college idea that turned into a million-dollar success? Share it with us in the comments section!",
    },
    {
      id: "2",
      title: "The Hidden Startup Inside Every College Event, Learning to Build from Zero",
      excerpt:
        "How organizing a college event is your first lesson in entrepreneurship.",
      date: "August 10, 2025",
      author: "E-Cell PRMIT&R",
      image: banner1,
      category: "Campus Lessons",
      readTime: "4 min read",
      content: "Ever noticed how organizing a college event feels a lot like running a small startup?\nYou start with nothing but an idea — a small thought that turns into meetings, group chats, endless planning, and the occasional panic.\n\nAt first, it’s just you and a few enthusiastic friends who believe in something that doesn’t exist yet. That’s exactly what founders do. They take a blank page and start building.\n\nFrom deciding the event theme to convincing others to join in, you’re already learning how to sell an idea, build a team, and execute under pressure. You deal with limited budgets, uncertain timelines, and unexpected problems — the same challenges early-stage startups face.\n\nEvery college event has a why behind it — just like a startup has a mission statement. Maybe you wanted to promote innovation, or maybe just create something memorable for your peers. Either way, you’re learning how to turn ideas into reality — and that’s the first lesson of entrepreneurship.",
    },
    {
      id: "3",
      title: "Team Chaos = Leadership School — Managing People Like a Founder",
      excerpt:
        "Why leading a college event is the best crash course in startup leadership.",
      date: "August 17, 2025",
      author: "E-Cell PRMIT&R",
      image: banner1,
      category: "Leadership",
      readTime: "4 min read",
      content: "If you’ve ever led a college event, you know this: ideas are easy, people are hard.\n\nThe biggest challenge isn’t planning — it’s managing a team of friends, volunteers, and classmates, all with different levels of motivation (and attendance). You remind someone about deadlines, handle miscommunication, and somehow keep the energy alive.\n\nWelcome to leadership training — startup edition.\n\nYou learn to delegate, communicate, and sometimes just calmly fix things when they fall apart. When a teammate disappears right before the event, or the person in charge of publicity forgets the poster deadline, you’re forced to adapt — not complain.\n\nAnd that’s exactly what founders do. Startups thrive on uncertainty, and leaders hold teams together when things go off-script.\n\nYou also learn empathy. You realize people work differently, and leadership isn’t about control — it’s about direction.",
    },
    {
      id: "4",
      title: "The Budget Game — How Handling Event Money Teaches You Startup Finance",
      excerpt:
        "How college event budgeting is your first real-world finance lesson.",
      date: "August 24, 2025",
      author: "E-Cell PRMIT&R",
      image: banner1,
      category: "Finance",
      readTime: "4 min read",
      content: "Every college event has that one terrifying moment — when you open the spreadsheet and realize the budget doesn’t balance.\n\nThat’s when you meet your inner finance executive.\n\nYou start estimating expenses, prioritizing needs, and making tough calls: ‘Do we really need those fancy banners?’ or ‘Can we manage refreshments cheaper?’ These aren’t small decisions — they’re lessons in resource management and financial discipline.\n\nRaising sponsorship? That’s fundraising. Convincing a local business or college administration to support you is the same as pitching investors. Managing payments, collecting bills, and keeping track of every rupee? That’s your first real-world cash flow management.\n\nAnd if you’ve ever ended an event with a small surplus, congratulations — you’ve just achieved your first profitable quarter.",
    },
    {
      id: "5",
      title: "The Aftermath — Feedback, Failure & the Growth Mindset",
      excerpt:
        "Why post-event reflection is the secret to entrepreneurial growth.",
      date: "August 31, 2025",
      author: "E-Cell PRMIT&R",
      image: banner1,
      category: "Growth",
      readTime: "3 min read",
      content: "The event is over. The banners come down, the group chat goes silent, and suddenly — it’s just… done.\n\nBut here’s the real part no one talks about — this is when the real learning begins.\n\nMaybe things didn’t go as planned. Maybe the turnout was low, or something broke at the last minute. You replay every mistake in your head and wonder, ‘What could we have done better?’\n\nThat reflection — that instinct to improve — is the foundation of the startup mindset.\n\nFounders call it iteration. You call it learning from experience.\nEvery event you organize becomes a case study in what works and what doesn’t — in planning, budgeting, teamwork, and even communication.\n\nFailure doesn’t mean you failed; it means you found one more way not to do something. And the next time? You’ll do it smarter.",
    },
  ];

  // Find the blog post by id
  const post = blogPosts.find((b) => b.id === blogId);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0E001B] flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog Not Found</h1>
            <p className="text-[#D1D5DB] mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              href="/blogs"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#1C0233] text-white rounded-full font-medium hover:shadow-[0_0_20px_#8B5CF6]/50 transition-all"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blogs
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E001B]">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E001B]/40 via-[#0E001B]/70 to-[#0E001B]" />
        {/* Back Button - Floating */}
        <div className="absolute top-8 left-4 sm:left-8 z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center px-4 py-2 bg-[#1C0233]/80 backdrop-blur-md text-white rounded-full hover:bg-[#8B5CF6]/80 transition-all group border border-[#8B5CF6]/30"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </Link>
        </div>

        {/* Title Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Badge */}
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-[#8B5CF6] text-white mb-4 shadow-lg">
                {post.category}
              </span>
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          {/* Meta Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pb-8 mb-8 border-b border-[#8B5CF6]/20"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="#8B5CF6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[#D1D5DB] font-medium">{post.author}</span>
              </div>
            </div>
            <div className="h-12 w-px bg-[#8B5CF6]/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-[#D1D5DB]">
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
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[#D1D5DB]">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm">{post.readTime}</span>
            </div>
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {post.content.split("\n\n").map((paragraph, index) => {
              const isFirstParagraph = index === 0;
              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`text-[#D1D5DB] mb-6 leading-relaxed ${
                    isFirstParagraph ? "text-xl font-light text-[#E5E7EB] first-letter:text-5xl first-letter:font-bold first-letter:text-[#8B5CF6] first-letter:mr-2 first-letter:float-left" : "text-lg"
                  }`}
                >
                  {paragraph}
                </motion.p>
              );
            })}
          </motion.div>


          {/* Tags Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 pt-8 border-t border-[#8B5CF6]/20"
          >
            <h3 className="text-white font-semibold mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              {["Entrepreneurship", "Startups", "Google", "Innovation", "Student Ventures"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm bg-[#1C0233] text-[#8B5CF6] rounded-full border border-[#8B5CF6]/30 hover:bg-[#8B5CF6] hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Share & Engage Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            <div className="bg-gradient-to-br from-[#1C0233] to-[#0E001B] rounded-2xl p-8 border border-[#8B5CF6]/20 shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Enjoyed this article?
                </h3>
                <p className="text-[#D1D5DB] mb-6 max-w-2xl mx-auto">
                  Join the conversation about entrepreneurship and innovation. Share your thoughts and success stories with our community!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="inline-flex items-center px-6 py-3 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-full font-medium hover:bg-[#8B5CF6] hover:text-white transition-all">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share Article
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#D8AFFF] text-white rounded-full font-semibold hover:shadow-[0_0_30px_#8B5CF6]/60 transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Explore More Articles
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
