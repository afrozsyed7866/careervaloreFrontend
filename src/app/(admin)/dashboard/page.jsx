// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { fetchCardDetails } from "../../utils/apicall";
// import { endpoints } from "../../../endpoints";

// import Link from "next/link";
// import MoviesGrid from "@/components/MoviesGrid";
// import JobTable from "@/components/JobTable";
// import dotenv  from "dotenv"

// import { Grid, Typography, CircularProgress  ,Tabs,Tab,Box,} from "@mui/material"; // Import MUI components
// export default function Dashboard() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [tabValue, setTabValue] = useState(0); // State for active tab

//   const router = useRouter();
//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; // Safely access localStorage
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const data = await fetchCardDetails(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/alljobs`,
//           "GET",
//           token
//         ); // Pass the token in API call
//         setMovies(data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load movies");
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);
  
//   const handlePin = async (id, currentPinState) => {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ pin: !currentPinState }), // Toggle pin state
//       });

//       if (response.ok) {
//         // Update the local state to reflect the change
//         setMovies((prevMovies) =>
//           prevMovies.map((movie) =>
//             movie._id === id ? { ...movie, pin: !currentPinState } : movie
//           )
//         );
//       } else {
//         console.error("Failed to update pin state");
//       }
//     } catch (err) {
//       console.error("Error updating pin state:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         // Remove the deleted job from the state
//         setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== id));
//       } else {
//         console.error("Failed to delete job");
//       }
//     } catch (err) {
//       console.error("Error deleting job:", err);
//     }
//   };
//   // const handleEdit = async (updatedJob) => {

//   //   try {
//   //     const response = await fetch(`${endpoints.BASE_URL}/jobs/${updatedJob._id}`, {
//   //       method: "PUT",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //       body: JSON.stringify({
//   //         title: updatedJob.title,
//   //         company: updatedJob.company,
//   //         location: updatedJob.location,
//   //         description: updatedJob.description,
//   //         requirements: updatedJob.requirements,
//   //         type: updatedJob.type,
//   //         sector: updatedJob.sector,
//   //         salary: updatedJob.salary,
//   //         applicationDeadline: updatedJob.applicationDeadline,
//   //         isActive: updatedJob.isActive,
//   //         pin: updatedJob.pin,
//   //       }),
//   //     });
//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       throw new Error(errorData.message || "Failed to update job");
//   //     }

//   //     const result = await response.json();
//   //     setMovies((prevMovies) =>
//   //       prevMovies.map((movie) =>
//   //         movie._id === result.data._id ? result.data : movie
//   //       )
//   //     );
//   //   } catch (err) {
//   //     console.error("Error updating job:", err);
//   //     alert("Failed to update job: " + err.message); // Simple feedback
//   //   }
//   // };
//   const handleEdit = async (updatedJob) => {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${updatedJob._id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(updatedJob),
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to update job");
//       }
//       const result = await response.json();
//       setMovies((prevMovies) =>
//         prevMovies.map((movie) => (movie._id === result.data._id ? result.data : movie))
//       );
//     } catch (err) {
//       console.error("Error updating job:", err);
//       alert("Failed to update job: " + err.message);
//     }
//   };
  
//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const pinnedMovies = movies.filter((movie) => movie.pin); // Filter pinned movies

//   return (
//     <div style={{ padding: "20px", margin: "0 auto" }}>
//       <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
//         Jobs Dashboard
//       </Typography>
//       {loading ? (
//         <Grid container justifyContent="center">
//           <CircularProgress />
//         </Grid>
//       ) : error ? (
//         <Typography variant="body1" color="error" align="center">
//           {error}
//         </Typography>
//       ) : (
//         <>
//           {/* Section for Pinned Movies */}
//           <Grid container spacing={3} style={{ marginBottom: "20px" }}>
//             <Grid item xs={12}>
//               <Typography variant="h5" color="primary">
//                 Pinned Jobs <span style={{color:'red',fontSize:"1rem"}}>ensure that thee are only 5 pinned jobs *</span>
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               {pinnedMovies.length > 0 ? (
//                 <div>
//                 <MoviesGrid
//                   movies={pinnedMovies}
//                   handlePin={handlePin}
//                   handleDelete={handleDelete}
//                 />
//                 </div>
//               ) : (
//                 <Typography variant="body1" align="center">
//                   No pinned jobs available.
//                 </Typography>
//               )}
//             </Grid>
//           </Grid>

//           {/* All Movies Section */}
//           {/* <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <Typography variant="h5" color="textPrimary">
//                 All Jobs
//               </Typography>
//             </Grid>
//             <Grid item xs={12} >
//               <MoviesGrid
//                 movies={movies}
//                 handlePin={handlePin}
//                 handleDelete={handleDelete}
//               />
//             </Grid>
//           </Grid>     this is savarate 
//           <JobTable jobs={movies} onDelete={handleDelete} />   this is saparate  */}


// <Grid item xs={12}>
//         {/* MUI Tabs */}
//         <Tabs
//           value={tabValue}
//           onChange={handleTabChange}
//           aria-label="job view tabs"
          
//         >
//           <Tab label="Grid View" />
//           <Tab label="Table View" />
//         </Tabs>

//         {/* Tab Panels */}
//         <Box sx={{ mt: 2 }}>
//           {tabValue === 0 && (
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <Typography variant="h5" color="textPrimary">
//                   All Jobs (Grid)
//                 </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <MoviesGrid
//                   movies={movies}
//                   handlePin={handlePin}
//                   handleDelete={handleDelete}
//                 />
//               </Grid>
//             </Grid>
//           )}
//           {tabValue === 1 && (
//       <JobTable jobs={movies} onDelete={handleDelete} onEdit={handleEdit} />
//     )}
//         </Box>
//       </Grid>

//         </>
//       )}
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchCardDetails } from "../../../utils/apicall";
import { endpoints } from "../../../../endpoints";
import Link from "next/link";
import MoviesGrid from "@/components/MoviesGrid";
import JobTable from "@/components/JobTable";
import { Grid, Typography, CircularProgress, Tabs, Tab, Box } from "@mui/material";

export default function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tabValue, setTabValue] = useState(0); // State for active tab

  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; // Safely access localStorage

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchCardDetails(
          `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/alljobs`,
          "GET",
          token
        ); // Pass the token in API call
        setMovies(data.reverse()); // Reverse the array here
        setLoading(false);
      } catch (err) {
        setError("Failed to load movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handlePin = async (id, currentPinState) => {
  try {
    // Check if pinning would exceed the limit of 5 pinned jobs
    if (!currentPinState && movies.filter((movie) => movie.pin).length >= 5) {
      alert("Cannot pin more than 5 jobs.");
      return;
    }

    const jobToUpdate = movies.find((movie) => movie._id === id);
    if (!jobToUpdate) {
      console.error("Job not found in local state");
      return;
    }

    const updatedJobData = {
      ...jobToUpdate,
      pin: !currentPinState,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedJobData),
    });

    if (response.ok) {
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie._id === id ? { ...movie, pin: !currentPinState } : movie
        )
      );
    } else {
      console.error("Failed to update pin state");
    }
  } catch (err) {
    console.error("Error updating pin state:", err);
  }
};

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Remove the deleted job from the state
        setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== id));
      } else {
        console.error("Failed to delete job");
      }
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  const handleEdit = async (updatedJob) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${updatedJob._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedJob),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update job");
      }
      const result = await response.json();
      setMovies((prevMovies) =>
        prevMovies.map((movie) => (movie._id === result.data._id ? result.data : movie))
      );
    } catch (err) {
      console.error("Error updating job:", err);
      alert("Failed to update job: " + err.message);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const pinnedMovies = movies.filter((movie) => movie.pin); // Filter pinned movies

  return (
    <div style={{ padding: "20px", margin: "0 auto" }}>
   <div style={{position:"absolute"}}>
  <a
    href="/dashboard/blogPost"
    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
  >
    Blog Module
  </a>
</div>
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        Jobs Dashboard
      </Typography>
      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : error ? (
        <Typography variant="body1" color="error" align="center">
          {error}
        </Typography>
      ) : (
        <>
          {/* Section for Pinned Movies */}
          <Grid container spacing={3} style={{ marginBottom: "20px" }}>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                Pinned Jobs <span style={{ color: "red", fontSize: "1rem" }}>ensure that there are only 5 pinned jobs *</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {pinnedMovies.length > 0 ? (
                <MoviesGrid
                  movies={pinnedMovies}
                  handlePin={handlePin}
                  handleDelete={handleDelete}
                />
              ) : (
                <Typography variant="body1" align="center">
                  No pinned jobs available.
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            {/* MUI Tabs */}
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="job view tabs">
              <Tab label="Grid View" />
              <Tab label="Table View" />
            </Tabs>
            {/* Tab Panels */}
            <Box sx={{ mt: 2 }}>
              {tabValue === 0 && (
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h5" color="textPrimary">
                      All Jobs (Grid)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <MoviesGrid
                      movies={movies}
                      handlePin={handlePin}
                      handleDelete={handleDelete}
                    />
                  </Grid>
                </Grid>
              )}
              {tabValue === 1 && (
                <JobTable jobs={movies} onDelete={handleDelete} onEdit={handleEdit} />
              )}
            </Box>
          </Grid>
        </>
      )}
    </div>
  );
}