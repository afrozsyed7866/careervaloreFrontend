"use client";
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function JobSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    setLoading(true);
    setError("");
    try {
        const response = await axios.post( `${process.env.NEXT_PUBLIC_BASE_URL}/jobs`, {
            search: searchTerm,
          });
      setJobs(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Debounce logic
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (searchTerm) {
        fetchJobs();
      } else {
        setJobs([]); // Reset when search is empty
      }
    }, 500); // 500ms debounce delay

    return () => clearTimeout(debounceTimeout); // Clear the timeout on every change
  }, [searchTerm]);

  return (
    <div className="max-w-4xl mx-auto p-6" >
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Loading & Error Messages */}
      {loading && <p className="text-center text-blue-500 mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Job Listings */}
      <div className="mt-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="p-4 bg-white rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.description}</p>
              <span className="text-sm text-gray-500">Posted: {new Date(job.createdAt).toLocaleDateString()}</span>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No jobs found</p>
        )}
      </div>
    </div>
  );
}
