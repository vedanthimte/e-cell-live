"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../public/E-CELL.png";

const COLORS = {
  midnightPurple: "#0E001B",
  royalViolet: "#8B5CF6",
  lavenderGlow: "#B497FF",
  electricWhite: "#FFFFFF",
  coolGray: "#D1D5DB",
  deepIndigo: "#1C0233",
  neonLilac: "#D8AFFF",
};

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/e-cell-prmit-r/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ecell_prmitr?igsh=MTIxbWQ4NXFwNXV2",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.04c-2.7 0-3.05.01-4.12.06-1.07.05-1.79.22-2.43.46-.65.24-1.21.56-1.77.97-.56.41-1.02.87-1.43 1.43-.41.56-.73 1.12-.97 1.77-.24.64-.41 1.36-.46 2.43-.05 1.07-.06 1.42-.06 4.12 0 2.7.01 3.05.06 4.12.05 1.07.22 1.79.46 2.43.24.65.56 1.21.97 1.77.41.56.87 1.02 1.43 1.43.56.41 1.12.73 1.77.97.64.24 1.36.41 2.43.46 1.07.05 1.42.06 4.12.06 2.7 0 3.05-.01 4.12-.06 1.07-.05 1.79-.22 2.43-.46.65-.24 1.21-.56 1.77-.97.56-.41 1.02-.87 1.43-1.43.41-.56.73-1.12.97-1.77.24-.64.41-1.36.46-2.43.05-1.07.06-1.42.06-4.12 0-2.7-.01-3.05-.06-4.12-.05-1.07-.22-1.79-.46-2.43-.24-.65-.56-1.21-.97-1.77-.41-.56-.87-1.02-1.43-1.43-.56-.41-1.12-.73-1.77-.97-.64-.24-1.36-.41-2.43-.46-1.07-.05-1.42-.06-4.12-.06zm0 1.5c2.65 0 2.98.01 4.04.06.97.04 1.5.2 1.85.34.46.18.78.4 1.12.73.33.34.55.66.73 1.12.14.35.3.88.34 1.85.05 1.06.06 1.39.06 4.04 0 2.65-.01 2.98-.06 4.04-.04.97-.2 1.5-.34 1.85-.18.46-.4.78-.73 1.12-.34.33-.66.55-1.12.73-.35.14-.88.3-1.85.34-1.06.05-1.39.06-4.04.06-2.65 0-2.98-.01-4.04-.06-.97-.04-1.5-.2-1.85-.34-.46-.18-.78-.4-1.12-.73-.33-.34-.55-.66-.73-1.12-.14-.35-.3-.88-.34-1.85-.05-1.06-.06-1.39-.06-4.04 0-2.65.01-2.98.06-4.04.04-.97.2-1.5.34-1.85.18-.46.4-.78.73-1.12.34-.33.66-.55 1.12-.73.35-.14.88-.3 1.85-.34 1.06-.05 1.39-.06 4.04-.06zm0 2.5a5 5 0 100 10 5 5 0 000-10zm0 8.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zm6.5-8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://whatsapp.com/channel/0029Vatg1h4IiRoo2nKUUz02",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ];

  const contactItems = [
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      text: "ecellprmitr@gmail.com",
      href: "mailto:ecellprmitr@gmail.com",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
          <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z" />
        </svg>
      ),
      text: "+91 90229 27354",
      href: "tel:+919022927354",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
          <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z" />
        </svg>
      ),
      text: "+91 74991 18495",
      href: "tel:+917499118495",
    },
  ];

  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: COLORS.midnightPurple }}
    >
      {/* Glowing Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="h-px w-full bg-gradient-to-r from-transparent via-[#B497FF] to-transparent"
        style={{
          background: `linear-gradient(90deg, transparent, ${COLORS.lavenderGlow}, transparent)`,
        }}
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1 - Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <motion.img
                src={Logo.src}
                alt="E-Cell Logo"
                width={40}
                height={40}
                className="group-hover:rotate-6 transition-transform duration-300"
              />
              <div className="ml-3">
                <motion.h1
                  className="font-bold text-lg"
                  style={{ color: COLORS.electricWhite }}
                  whileHover={{ x: 2 }}
                >
                  E-Cell{" "}
                  <span
                    className="font-medium"
                    style={{ color: COLORS.coolGray }}
                  >
                    PRMIT&R
                  </span>
                </motion.h1>
              </div>
            </Link>

            <p className="text-sm" style={{ color: COLORS.coolGray }}>
              Empowering the next generation of student entrepreneurs at
              PRMIT&R.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: COLORS.coolGray }}
                  whileHover={{
                    scale: 1.1,
                    color: COLORS.neonLilac,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 - Contact Us */}
          <div className="space-y-4 sm:ml-95">
            <h3
              className="font-semibold text-lg"
              style={{ color: COLORS.electricWhite }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <motion.a
                    href={item.href}
                    className="flex items-center text-sm transition-colors duration-300"
                    style={{ color: COLORS.coolGray }}
                    whileHover={{
                      x: 4,
                      color: COLORS.neonLilac,
                    }}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.text}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="mt-16 pt-6 border-t"
          style={{ borderColor: `${COLORS.lavenderGlow}10` }}
        >
          <p className="text-xs text-center" style={{ color: COLORS.coolGray }}>
            © 2025 E-Cell, PRMIT&R. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-colors duration-300"
        style={{ backgroundColor: COLORS.royalViolet }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.1,
          backgroundColor: COLORS.deepIndigo,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: COLORS.electricWhite }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* Decorative Purple Glow */}
      <div
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${COLORS.royalViolet} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
    </footer>
  );
};

export default Footer;
