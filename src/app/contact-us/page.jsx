"use client"
import Link from "next/link";
import { MapPin, Mail, Clock, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: result.error || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Server error, please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Contact Us
              </h1>
              <p className="max-w-[700px] text-blue-100 text-lg leading-relaxed">
                Have questions or need assistance? Reach out to our team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="w-full p-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                  <p className="text-gray-600 text-base">
                    Fill out the form, and we’ll respond as soon as possible.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                         id="firstName"
                        type="text"
                        placeholder="Your first name"
                        className="rounded-lg border-gray-300 focus:ring-blue-500 p-2 w-full"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Your last name"
                        className="rounded-lg border-gray-300 focus:ring-blue-500 p-2 w-full"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="rounded-lg border-gray-300 focus:ring-blue-500 p-2 w-full"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="rounded-lg border-gray-300 focus:ring-blue-500 p-2 w-full"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What’s this about?"
                      className="rounded-lg border-gray-300 focus:ring-blue-500 p-2 w-full"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[120px] rounded-lg border-gray-300 focus:ring-blue-500 p-2 w-full"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {status && (
                    <p
                      className={`text-sm ${
                        status.type === "success" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all p-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                  <p className="text-gray-600 text-base">
                    We’re here to assist with any inquiries about our services.
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Office</h3>
                      <p className="text-gray-600">
                        Park Rd, Gandhi Nagar, Kurnool
                        <br />
                        , Andhra Pradesh 518001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">careervalore@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.linkedin.com/company/careervalore/posts/?feedView=all"
                      target="_blank"
                      className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-all"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/careervalore?igsh=bjl4N2EyaW54b2dm"
                      target="_blank"
                      className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-all"
                    >
                      <Instagram className="h-5 w-5 text-blue-600" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="https://www.whatsapp.com/channel/0029Vay7sUV11ulUIhLBUI44"
                      target="_blank"
                      className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-all"
                    >
                      <span className="text-blue-600 font-semibold text-sm">WA</span>
                      <span className="sr-only">WhatsApp</span>
                    </Link>
                    <Link
                      href="https://t.me/careervalore"
                      target="_blank"
                      className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-all"
                    >
                      <span className="text-blue-600 font-semibold text-sm">TG</span>
                      <span className="sr-only">Telegram</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="max-w-[700px] mx-auto text-gray-600 text-base">
                Answers to common questions about our services.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How can I apply for jobs on CareerValore?",
                  answer:
                    "You can directly visit the CareerValore website, browse job listings, and apply for jobs without needing to create an account.",
                },
                {
                  question: "Where is CareerValore located?",
                  answer:
                    "CareerValore operates as an online job portal accessible worldwide. We do not have a physical office location.",
                },
                {
                  question: "Is CareerValore free for job seekers?",
                  answer:
                    "Yes, CareerValore is completely free for job seekers. You can create a profile, upload your resume, and apply for jobs at no cost.",
                },
                {
                  question: "How are jobs posted on CareerValore?",
                  answer:
                    "Only admins can post jobs on CareerValore. Our team carefully searches for legitimate job openings and posts them on the website after verification.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[700px] mx-auto text-blue-100 text-lg leading-relaxed">
                Join thousands of professionals and companies on CareerValore today.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="//"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-blue-50 hover:scale-105 transition-all"
                >
                  Browse Jobs
                </Link>
                <Link
                  href="/about-us"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
                >
                  About US
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}