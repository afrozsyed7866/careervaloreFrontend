"use client";
import React, { useState, useEffect } from "react";
import JobDiv2 from '../components/JobDiv2'; // Updated import name
import ArticleGrid from '../components/ArticleGrid';
import { Grid, Box } from '@mui/material';
import JobFilters from "../components/JobFilters";
import { fetchCardDetails } from '../utils/apicall';
import AdseraAd from "../components/AdSence" 
import JobGrid from "../components/JobGrid";
function Temp() {
  const [latestJobs, setLatestJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(false); // Start as false, set to true when fetching
  const [error, setError] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    all: '',
    type: '',
    sector: '',
    location: '',
    pinned: false,
  });

  // Fetch latest jobs
  async function fetchLatestJobs() {
    setLoading(true);
    try {
      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/latest?limit=20`,
        "GET"
      );
      if (!response || !Array.isArray(response)) {
        throw new Error("Failed to fetch latest jobs");
      }
      setLatestJobs(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Fetch most viewed jobs
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/mostviewed`,
        "GET"
      );
      if (!response || !Array.isArray(response)) {
        throw new Error("Failed to fetch jobs");
      }
      setJobs(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch filtered jobs
  async function fetchFilteredJobs(filters) {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        ...(filters.type && { type: filters.type }),
        ...(filters.sector && { sector: filters.sector }),
        ...(filters.location && { location: filters.location }),
        ...(filters.pinned && { pinned: filters.pinned }),
      }).toString();

      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/filtered?${queryParams}`,
        "GET"
      );

      if (!response || !Array.isArray(response)) {
        throw new Error("Failed to fetch filtered jobs");
      }
      setFilteredJobs(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
    if (isFilterApplied(newFilters)) {
      fetchFilteredJobs(newFilters);
    } else {
      setFilteredJobs([]); // Reset filtered jobs when no filters are applied
    }
  };

  // Check if any filter is applied
  const isFilterApplied = (filters = activeFilters) => {
    return (
      filters.type !== '' ||
      filters.sector !== '' ||
      filters.location !== '' ||
      filters.pinned
    );
  };

  useEffect(() => {
    fetchLatestJobs();
    fetchJobs();
  }, []);

  return (
    <>
      <div className="px-2 md:px-10">
        <JobGrid />
        <div>
          <JobFilters onFilterChange={handleFilterChange} />
          {loading && <JobDiv2 jobs={filteredJobs}/>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            isFilterApplied() ? (
              <JobDiv2 jobs={filteredJobs} />
            ) : (
              <JobDiv2 jobs={latestJobs} />
            )
          )}
        </div>
        {/* <div>
          {error && <p>Error: {error}</p>}
          {!loading && !error && <JobDiv2 jobs={latestJobs} />}
        </div> */}
        <div className="flex items-center space-x-2" style={{ marginBottom: "2%" }}>
          <span className="text-black text-xl font-semibold">Most Viewed Jobs</span>
          <div className="w-2/4 h-1 bg-orange-500"></div>
        </div>
        <div>
          <ArticleGrid jobs={jobs} />
        </div>
              {/* <AdseraAd /> */}
        
      </div>
    </>
  );
}

export default Temp;