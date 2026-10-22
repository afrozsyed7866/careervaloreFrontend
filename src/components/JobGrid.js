"use client";
import { useEffect, useState } from "react";
import { Grid, Box, CircularProgress, Typography, Skeleton } from "@mui/material";
import JobCard from './JobCard'; // Import the JobCard component
import fetchCardDetails from '../utils/apicall'

// Custom Skeleton Components
const LargeSkeleton = () => (
  <Box sx={{ height: '300px', width: "100%", marginBottom: { xs: 2 } }}>
    <Skeleton variant="rectangular" height="100%" width="100%" />
  </Box>
);

const SmallSkeleton = () => (
  <Box sx={{ height: '140px', marginBottom: { xs: 2 } }}>
    <Skeleton variant="rectangular" height="100%" width="100%" />
  </Box>
);

function JobGrid() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/alljobs`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs where pin is true
  const pinnedJobs = jobs.filter((job) => job.pin === true);
  console.log(pinnedJobs);

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Grid container sx={{ padding: 0, backgroundColor: '#f5f5f5' }}>
      {loading ? (
        <>
          {/* Left Large Skeleton */}
          <Grid item xs={12} md={6}>
            <LargeSkeleton />
          </Grid>

          {/* Right Skeletons */}
          <Grid item xs={12} md={6} container style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <SmallSkeleton />
            </Grid>
            <Grid item xs={6}>
              <SmallSkeleton />
            </Grid>
            <Grid item xs={6}>
              <SmallSkeleton />
            </Grid>
            <Grid item xs={6}>
              <SmallSkeleton />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {/* Left Large Grid */}
          <Grid item xs={12} md={6} sx={{ height: '330px', width: "100vw", marginBottom: { xs: 2 } }}>
            <Box display="flex" height="100%">
              <JobCard
                image={pinnedJobs[0]?.image || "No data"}
                title={pinnedJobs[0]?.title || "No data"}
                sector={pinnedJobs[0]?.sector || "No data"}
                salary={pinnedJobs[0]?.salary || "No data"}
                baseUrl={pinnedJobs[0]?._id || "No data"}
              />
            </Box>
          </Grid>

          {/* Right Grid */}
          <Grid item xs={12} md={6} container style={{ display: "flex", alignItems: "center" }}>
            {/* Top Right Section */}
            <Grid item xs={6} sx={{ height: '140px', marginBottom: { xs: 2 } }}>
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                <JobCard
                  image={pinnedJobs[1]?.image || "No data"}
                  title={pinnedJobs[1]?.title || "No data"}
                  sector={pinnedJobs[1]?.sector || "No data"}
                  salary={pinnedJobs[1]?.salary || "No data"}
                  baseUrl={pinnedJobs[1]?._id || "No data"}
                  animate={true}
                />
              </Box>
            </Grid>

            <Grid item xs={6} sx={{ height: '140px', marginBottom: { xs: 2 } }}>
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                <JobCard
                  image={pinnedJobs[2]?.image || "No data"}
                  title={pinnedJobs[2]?.title || "No data"}
                  sector={pinnedJobs[2]?.sector || "No data"}
                  salary={pinnedJobs[2]?.salary || "No data"}
                  baseUrl={pinnedJobs[2]?._id || "No data"}
                  animate={true}
                />
              </Box>
            </Grid>

            {/* Bottom Right Section */}
            <Grid item xs={6} sx={{ height: '140px', marginBottom: { xs: 2 } }}>
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                <JobCard
                  image={pinnedJobs[3]?.image || "No data"}
                  title={pinnedJobs[3]?.title || "No data"}
                  sector={pinnedJobs[3]?.sector || "No data"}
                  salary={pinnedJobs[3]?.salary || "No data"}
                  baseUrl={pinnedJobs[3]?._id || "No data"}
                  animate={true}
                />
              </Box>
            </Grid>

            <Grid item xs={6} sx={{ height: '140px', marginBottom: { xs: 2 } }}>
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                <JobCard
                  image={pinnedJobs[4]?.image || "No data"}
                  title={pinnedJobs[4]?.title || "No data"}
                  sector={pinnedJobs[4]?.sector || "No data"}
                  salary={pinnedJobs[4]?.salary || "No data"}
                  baseUrl={pinnedJobs[4]?._id || "No data"}
                  animate={true}
                />
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default JobGrid;