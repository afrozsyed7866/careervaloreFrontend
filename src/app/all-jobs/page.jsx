"use client"
import React, { useState, useEffect } from 'react'
import ArticleGrid from '../../components/ArticleGrid'; // Adjust path as needed
import { fetchCardDetails } from '../../utils/apicall';

function Page() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const fetchJobs = async () => {
    try {
      const response = await fetchCardDetails(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/alljobs`,
        "GET"
      );
      if (!response || !Array.isArray(response)) {
        throw new Error("Failed to fetch jobs");
      }
      setJobs(response.reverse());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
};

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <ArticleGrid jobs={jobs} loading={loading} error={error} />
    </div>
  )
}

export default Page