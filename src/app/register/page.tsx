"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    password: "",
    confirmPassword: "",
    role: "participant",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.institution.trim())
      newErrors.institution = "Institution is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success toast (you would implement this)
      // toast.success('Registration successful!');

      // Redirect to login or dashboard
      router.push("/login");
    } catch (error) {
      // Handle error
      // toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Register | E-Cell</title>
        <meta
          name="description"
          content="Join E-Cell to access entrepreneurial resources"
        />
      </Head>

      <div className="min-h-screen bg-[#0E001B] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl bg-[#1C0233] rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            {/* Left side - Form */}
            <div className="w-full md:w-1/2 p-8">
              <div className="text-center mb-8">
                <Link href="/">
                  <img
                    src="/ecell-logo.png"
                    alt="E-Cell Logo"
                    className="h-12 mx-auto mb-4"
                  />
                </Link>
                <h1 className="text-3xl font-bold text-[#FFFFFF] mb-2">
                  Join E-Cell – Fuel Your Ideas!
                </h1>
                <p className="text-[#D1D5DB]">
                  Sign up to access events, resources, and the entrepreneurial
                  community.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[#FFFFFF] mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#FFFFFF] mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#FFFFFF] mb-1"
                  >
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-sm font-medium text-[#FFFFFF] mb-1"
                  >
                    College/Institution Name
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.institution ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition`}
                    placeholder="Enter your institution name"
                  />
                  {errors.institution && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.institution}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-[#FFFFFF] mb-1"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#D1D5DB] focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition"
                  >
                    <option value="participant">Participant</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="guest">Guest</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#FFFFFF] mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition`}
                    placeholder="Create a password"
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-[#D1D5DB]">
                    Password must be at least 8 characters
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-[#FFFFFF] mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#8B5CF6] border-[#D1D5DB] rounded focus:ring-[#8B5CF6]"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="agreeTerms"
                      className="font-medium text-[#FFFFFF]"
                    >
                      I agree to the{" "}
                      <a
                        href="/terms"
                        className="text-[#8B5CF6] hover:text-[#B497FF]"
                      >
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-[#8B5CF6] hover:text-[#B497FF]"
                      >
                        Privacy Policy
                      </a>
                    </label>
                    {errors.agreeTerms && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.agreeTerms}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#1C0233] text-[#FFFFFF] font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#FFFFFF]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Register"
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-[#D1D5DB]">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-[#8B5CF6] hover:text-[#B497FF]"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-purple-600 to-indigo-700 p-12">
              <div className="h-full flex flex-col justify-center items-center text-white">
                <img
                  src="/register-illustration.svg"
                  alt="Entrepreneurship illustration"
                  className="w-64 mb-8"
                />
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Join Our Entrepreneurial Community
                </h2>
                <p className="text-center opacity-90">
                  Access exclusive events, workshops, and resources to kickstart
                  your entrepreneurial journey.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Networking</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Workshops</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Mentorship</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
