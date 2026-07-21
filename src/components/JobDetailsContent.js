"use client";
import { useState, useEffect } from "react";
import { Calendar, MapPin, Briefcase, Banknote, Clock, CheckCircle, Wallet, Eye } from "lucide-react";
import Image from "next/image";
import JobGrid from "@/components/ArticleGrid";
import { fetchCardDetails } from "../utils/apicall";
import DesktopBannerAd from "../components/adds/DesktopBannerAd"
import DesktopBannerAd2  from "@/components/adds/DesktopBannerAd2"
import AdNotice from "../components/AdNotice"


// import MobileBannerAd from "/adds/MobileBannerAd";
const CustomSkeleton = ({ width, height, variant = "rectangular" }) => {
  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
    backgroundSize: "200% 100%",
    animation: "skeleton-loading 1.5s infinite",
    borderRadius: variant === "rounded" ? "9999px" : variant === "text" ? "4px" : "8px",
  };

  return (
    <div style={style}>
      <style jsx>{`
        @keyframes skeleton-loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};

export default function JobPosting({ job }) {
  const cleanString = (str) => (typeof str === "string" ? str.replace(/^"|"$/g, "") : str || "");
  const formatDate = (date) => (date ? new Date(date).toLocaleDateString() : "N/A");

  const [countdown, setCountdown] = useState(0);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/latest?limit=3`,
        "GET"
      );
      if (!response || !Array.isArray(response)) {
        throw new Error("Failed to fetch jobs");
      }
      setJobs(response);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
console.log(jobs)
  useEffect(() => {
    if (!job) return;
    if (countdown > 0) {
      const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setIsButtonActive(true);
    }
  }, [countdown, job]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col items-start gap-4">
          <AdNotice/>


            {job ? (
              <>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  {job.isActive ? "Active Opening" : "Closed"}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {cleanString(job.company)} – Hiring for {cleanString(job.title)} @{cleanString(job.location)}
                </h1>
                <div className="flex flex-wrap gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {cleanString(job.location)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Banknote className="h-4 w-4" />
                    {cleanString(job.salary) || "Not specified"}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {cleanString(job.type)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    {cleanString(job.totalViews)}
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <CustomSkeleton width={150} height={24} variant="rounded" />
                <CustomSkeleton width="80%" height={48} variant="text" />
                <div className="flex flex-wrap gap-4">
                  <CustomSkeleton width={100} height={24} variant="text" />
                  <CustomSkeleton width={100} height={24} variant="text" />
                  <CustomSkeleton width={100} height={24} variant="text" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3" style={{ margin: "0 2%" }}>
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-2">
              {job ? (
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">About Company</h2>
                    <p className="text-gray-600">{cleanString(job.aboutCompany) || "No company description available"}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <CustomSkeleton width={200} height={28} variant="text" />
                  <CustomSkeleton width="90%" height={20} variant="text" />
                </div>
              )}
            </div>
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              {job ? (
                <Image
                  src={job.image || "https://via.placeholder.com/800x300"}
                  alt="Job Image"
                  width={800}
                  height={300}
                  className="w-full h-full object-fill"
                />
                // <></>
              ) : (
                <CustomSkeleton width="100%" height="100%" variant="rectangular" />
              )}
            </div>
            <div className="bg-white rounded-lg p-2">
              {job ? (
                <>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                    {cleanString(job.title)}
                  </h2>
                  {/* table */}
                  <div className="bg-white rounded-lg ">
  <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Details</h2>
  {job ? (
    <table className="w-full text-sm text-gray-500 border border-black">
      <tbody>
        <tr className="border-b border-black">
          <td className="py-2 font-bold text-black" style={{ padding: "10px 20px",borderRight:"1px solid black" }}>Role:</td>
          <td className="py-2" style={{paddingLeft:"10px"}}>{cleanString(job.title)}</td>
        </tr>
        <tr className="border-b border-black">
          <td className="py-2 font-bold text-black" style={{ padding: "10px 20px" ,borderRight:"1px solid black" }}>Salary:</td>
          <td className="py-2 "  style={{paddingLeft:"10px"}}>{cleanString(job.salary) || "Not specified"}</td>
        </tr>
        <tr className="border-b border-black">
          <td className="py-2 font-bold text-black" style={{ padding: "10px 20px",borderRight:"1px solid black"  }}>Location:</td>
          <td className="py-2" style={{paddingLeft:"10px"}}>{cleanString(job.location)}</td>
        </tr>
        <tr className="border-b border-black">
          <td className="py-2 font-bold text-black" style={{ padding: "10px 20px",borderRight:"1px solid black"  }}>Job Type:</td>
          <td className="py-2" style={{paddingLeft:"10px"}}>{cleanString(job.type)}</td>
        </tr>
        <tr className="border-b border-black">
          <td className="py-2 font-bold text-black" style={{ padding: "10px 20px" ,borderRight:"1px solid black" }}>Posted Date:</td>
          <td className="py-2" style={{paddingLeft:"10px"}}>{formatDate(job.postedDate)}</td>
        </tr>
        <tr>
          <td className="py-2 font-bold text-black" style={{ padding: "10px 20px",borderRight:"1px solid black"  }}>Application Deadline:</td>
          <td className="py-2" style={{paddingLeft:"10px"}}>{job.applicationDeadline ? formatDate(job.applicationDeadline) : "Apply Soon"}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <div className="space-y-2">
      <CustomSkeleton width={150} height={28} variant="text" />
      {[...Array(6)].map((_, index) => (
        <CustomSkeleton key={index} width="100%" height={20} variant="text" />
      ))}
    </div>
  )}
</div>
                  <div className="prose prose-blue max-w-none">
                    {Array.isArray(job.description) && job.description.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-900 pb-2">Job Description</h3>
                        {job.description.map((role, index) => (
                          <p key={index} className="text-gray-600">
                            {role}
                          </p>
                        ))}
                      </div>


                    )}
                    {Array.isArray(job.rolesAndResponsibilities) && job.rolesAndResponsibilities.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-900 pb-2">Roles and Responsibilities</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          {job.rolesAndResponsibilities.map((role, index) => (
                            <li key={index}>{cleanString(role)}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  {/* table */}
                  <div className="bg-white rounded-lg p-2 " >
                    {job ? (
                      <table className="w-full text-sm text-gray-500 border border-black" >
                        <tbody >
                          <tr className="border-b border-black" >
                            <td className="py-2 font-bold text-black" style={{padding:"10px 20px",borderRight:"1px solid black"}} >Join Our Telegram Group:</td>
                            <td className="py-2"  style={{paddingLeft:"10px"}}>
                              <a
                                href="https://t.me/careervalore"
                                className="text-red-600 underline font-bold hover:text-red-800"
                              >
                                Click Here
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-black">
                            <td className="py-2 font-bold  text-black" style={{padding:"10px 20px" ,borderRight:"1px solid black"}}>Join Our WhatsApp Group:</td>
                            <td className="py-2" style={{paddingLeft:"10px"}}>
                              <a
                                href="https://whatsapp.com/channel/0029Vay7sUV11ulUIhLBUI44"
                                className="text-red-600 underline font-bold hover:text-red-800"
                              >
                                Click Here
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 font-bold  text-black" style={{padding:"10px 20px" ,borderRight:"1px solid black"}}>Join Our Instagram Page:</td>
                            <td className="py-2" style={{paddingLeft:"10px"}}>
                              <a
                                href="https://www.instagram.com/careervalore?igsh=bjl4N2EyaW54b2dm"
                                className="text-red-600 underline font-bold hover:text-red-800"
                              >
                                Click Here
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <div className="space-y-2">
                        <CustomSkeleton width="80%" height={20} variant="text" />
                        <CustomSkeleton width="80%" height={20} variant="text" />
                        <CustomSkeleton width="80%" height={20} variant="text" />
                      </div>
                    )}
                  </div>
                  
                  {/* resent jobs */}

    <div>
      <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-900 pb-2 mt-6">Similar Jobs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job._id} className="">
            <h4 className="text-md font-semibold">{job.title}</h4>
            <p className="text-sm text-gray-600">{job.company} - {job.location}
              <span style={{marginLeft: "10px"}}>
                   <a
              href={job._id}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm mt-2 inline-block"
            >
              Apply Now
            </a>
            </span>
            </p>
            {/* <p className="text-sm mt-2">{job.description[0].substring(0, 100)}...</p>
            <p className="text-sm font-medium mt-1">Salary: {job.salary}</p>
            <p className="text-sm text-gray-500">Posted: {new Date(job.postedDate).toLocaleDateString()}</p> */}
        
          </div>
        ))}
      </div>
    </div>



                    {Array.isArray(job.requirements) && job.requirements.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-900 pb-2">Requirements</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{cleanString(req)}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {Array.isArray(job.selectionProcess) && job.selectionProcess.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3 border-b-2 border-gray-900 pb-2">Selection Process</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          {job.selectionProcess.map((step, index) => (
                            <li key={index}>{cleanString(step)}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <CustomSkeleton width={250} height={28} variant="text" />
                  <CustomSkeleton width="100%" height={20} variant="text" />
                  <CustomSkeleton width="90%" height={20} variant="text" />
                  <CustomSkeleton width="95%" height={20} variant="text" />
                </div>
              )}
            </div>
                              <a
                    href="https://whatsapp.com/channel/0029Vay7sUV11ulUIhLBUI44"
                    className="  hover:text-green-700 transition duration-300 block p-2 text-gray-600" 
                  >
                    Apply on whatsapp :-
                    <span className="text-red-600"> Click Here </span>
                  </a>
            <div className="bg-white rounded-lg p-2 ">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-900">How to Apply?</h2>
              {job ? (
                <>
                <div className="space-y-4">
                  {[
                    'Click on the "Apply Now" button below',
                    "You will be redirected to the official career page",
                    "Submit all relevant documents (e.g. resume, mark sheet, ID proof)",
                    "Fill the required details and submit the required documents",
                    "Verify that all the details entered are correct",
                    "Submit the application form after verification",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
                            <a
                    href="https://t.me/careervalore"
                    className="  hover:text-green-700 transition duration-300 block p-2 text-gray-600 mt-6" 
                  >
                    Apply on telegram :-
                    <span className="text-red-600"> Click Here </span>
                  </a>
                  </>
              ) : (
                <div className="space-y-4">
                  <CustomSkeleton width={200} height={28} variant="text" />
                  {[...Array(6)].map((_, index) => (
                    <CustomSkeleton key={index} width="100%" height={20} variant="text" />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-900">Job Details</h2>
              {job ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="text-gray-900">{cleanString(job.title)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wallet className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Salary</p>
                      <p className="text-gray-900">{cleanString(job.salary) || "Not specified"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900">{cleanString(job.location)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Job Type</p>
                      <p className="text-gray-900">{cleanString(job.type)}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Posted Date</p>
                        <p className="text-gray-900">{formatDate(job.postedDate)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Application Deadline</p>
                        {job.applicationDeadline ? formatDate(job.applicationDeadline) : "Apply Soon"}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <CustomSkeleton width={150} height={28} variant="text" />
                  {[...Array(6)].map((_, index) => (
                    <CustomSkeleton key={index} width="100%" height={20} variant="text" />
                  ))}
                </div>
              )}
            </div>
            <div className="bg-white rounded-lg p-2">
              {job ? (
                isButtonActive ? (
                 
                  <a
                    href={job.jobLink || "#"}
                    className=" hover:text-green-700 transition duration-300 block"
                  >
                    Apply Link :-
                    <span className="text-red-600"> Click Here </span>
                  </a>

                ) : (
                  <button
                    disabled
                    className="w-full text-lg py-2 bg-gray-400 text-white rounded-md cursor-not-allowed block text-center"
                  >
                    Application link will be active in {countdown} seconds
                  </button>
                )
              ) : (
                <CustomSkeleton width="100%" height={60} variant="rectangular" />
              )}
              <div className="text-sm text-gray-500 mt-4">
                {job ? "Application takes less than 5 minutes" : <CustomSkeleton width={150} height={16} variant="text" />}
              </div>
               
            </div>
            <div className="bg-white rounded-lg p-2">
              {job ? (
                <>
                  <p className="text-sm text-black mb-2">
                    Join Our Telegram Group:{" "}
                    <a href="https://t.me/careervalore" className="text-red-600 underline font-medium hover:text-red-800">
                      Click Here
                    </a>
                  </p>
                  <p className="text-sm text-black mb-2">
                    Join Our WhatsApp Group:{" "}
                    <a
                      href="https://whatsapp.com/channel/0029Vay7sUV11ulUIhLBUI44"
                      className="text-red-600 underline font-medium hover:text-red-800"
                    >
                      Click Here To Join
                    </a>
                  </p>
                  <p className="text-sm text-black-500">
                    Join Our Instagram Page:{" "}
                    <a
                      href="https://www.instagram.com/careervalore?igsh=bjl4N2EyaW54b2dm"
                      className="text-red-600 underline font-medium hover:text-red-800"
                    >
                      Click Here To Join
                    </a>
                  </p>
                </>
              ) : (
                <div className="space-y-2">
                  <CustomSkeleton width="80%" height={20} variant="text" />
                  <CustomSkeleton width="80%" height={20} variant="text" />
                  <CustomSkeleton width="80%" height={20} variant="text" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex items-center space-x-2" style={{ marginBottom: "2%" }}>
          <span className="text-black text-xl font-semibold">Latest Jobs</span>
          <div className="w-2/4 h-1 bg-orange-500"></div>
        </div>
        <JobGrid jobs={jobs} />
      </div>
      
      {/* Desktop Banner Ad at the bottom */}
      {/* <MobileBannerAd adId="mobile-banner-1" width="320px" height="50px" /> */}
    </div>
  );
}
