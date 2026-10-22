'use client';

import Image from "next/image";
import Link from "next/link";
import { Award, Target, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px]">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  About CareerValore
                </h1>
                <p className="max-w-[600px] text-blue-100 text-lg leading-relaxed">
                  Connecting talented professionals with transformative career opportunities.
                </p>
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-blue-50 transition-all"
                >
                  Get Started
                </Link>
              </div>
              <Image
                src="/logo.jpg"
                width={550}
                height={550}
                alt="CareerValore"
                className="mx-auto rounded-xl object-cover shadow-lg lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">Our Services</h2>
              <p className=" mx-auto text-gray-600 text-base">
                Delivering innovative solutions to elevate your brand and business success.
              </p>
            </div>
            <div className="grid mx-auto gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Ads</h3>
                <p className="text-gray-600 leading-relaxed">
                  Creating targeted advertising campaigns to boost your brand’s visibility and engagement across platforms.
                </p>
              </div>
              <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Website Building</h3>
                <p className="text-gray-600 leading-relaxed">
                  Designing and developing responsive, user-friendly websites tailored to your business needs.
                </p>
              </div>
              <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Video Editing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Producing professional, high-quality video content to captivate your audience and enhance your brand.
                </p>
              </div>
              <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Graphic Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Crafting visually stunning graphics for logos, branding, and marketing materials to make your business stand out.
                </p>
              </div>
              <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pitch Deck & Presentation Making</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building compelling pitch decks and presentations to effectively communicate your ideas and win stakeholders.
                </p>
              </div>
              <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Transcription</h3>
                <p className="text-gray-600 leading-relaxed">
                  Providing accurate and timely transcription services for audio, video, and other multimedia content.
                </p>
              </div>
              <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Social Media Handling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Managing and optimizing your social media presence to grow your audience and strengthen your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Founded in 2024, CareerValore was born from a vision to revolutionize job searching and talent acquisition, tackling the inefficiencies of outdated methods.
                </p>
                <p>
                  Inspired by personal job-hunting struggles, we crafted a platform prioritizing transparency and efficiency. What began with a small, passionate team has evolved into a trusted hub for thousands of job seekers and employers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">Mission & Values</h2>
              <p className="max-w-[700px] mx-auto text-gray-600 text-base">
                Crafting meaningful professional connections with unwavering principles.
              </p>
            </div>
            <div className="grid max-w-5xl mx-auto gap-8 md:grid-cols-2">
              <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-full w-fit">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Empowering individuals to forge fulfilling careers and enabling organizations to thrive with exceptional talent.
                </p>
              </div>
              <div className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-full w-fit">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
                <ul className="space-y-3 text-gray-600 leading-relaxed">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span><strong>Integrity:</strong> Honest, transparent practices.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span><strong>Excellence:</strong> Uncompromising quality focus.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span><strong>Innovation:</strong> Pioneering platform evolution.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span><strong>Inclusivity:</strong> Opportunity for everyone.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold sm:text-4xl">Join Our Journey</h2>
              <p className="max-w-[700px] mx-auto text-blue-100 text-lg leading-relaxed">
                Discover your next career step or recruit top talent with CareerValore.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-blue-50 hover:scale-105 transition-all"
                >
                  Browse Jobs
                </Link>
                <Link
                  href="/contact-us"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}