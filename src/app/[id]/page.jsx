"use client";
import { useEffect, useState } from "react";
import { use } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { fetchCardDetails } from "../../utils/apicall";
import JobDetailsContent from "../../components/JobDetailsContent";
import AdseraAd from "../../components/AdseraAd" 

export default function Home({ params }) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = use(params); // Unwrap params Promise with React.use()

  useEffect(() => {
    const token = localStorage.getItem("token"); // Fetch token only on client-side
    async function fetchJobDetails() {
      try {
        const response = await fetchCardDetails(
          `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${id}`,
          "GET",
          token
        );
        if (!response || !response._id) throw new Error("Failed to fetch job details");
        setJob(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchJobDetails();
  }, [id]);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {loading ? (
//         <div className="flex justify-center items-center min-h-screen">
//           <CircularProgress />
//         </div>
//       ) : error ? (
//         <div className="text-center mt-4">
//           <Typography color="error">{error}</Typography>
//         </div>
//       ) : (
//         // <JobPosting job={job} />
//         <JobDetailsContent job={job} />

//       )}
//     </div>
//   );
// }

  return (
    
    <div className="min-h-screen bg-gray-100">
{/* Always render JobDetailsContent, passing job which can be null */}
<JobDetailsContent job={job} />
{error && !loading && (
  <div textalign="center" mt={4}>
    <Typography color="error">{error}</Typography>
  </div>
)}
      {/* <AdseraAd /> */}
</div>
  );
}


