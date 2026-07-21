"use client";

import React from "react";
import { Grid, Typography, Card, CardMedia, CardContent, Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";

// Custom Skeleton Component
const CustomSkeleton = () => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "row",
      height: "100%",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <CardContent
      sx={{
        flex: "2 1 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Skeleton variant="text" width="80%" height={32} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="60%" height={20} />
    </CardContent>
    <Skeleton
      variant="rectangular"
      sx={{
        flex: "1 1 0",
        width: { xs: 100, sm: 120, md: 140 },
        height: "auto",
      }}
    />
  </Card>
);

const ArticleGrid = ({ jobs, loading, error }) => {
  const router = useRouter();

  // Handle navigation to a specific job details page
  const handleNavigation = (jobId) => {
    router.push(`/${jobId}`);
  };

  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Grid container spacing={3} sx={{ padding: 0 }}>
      {loading
        ? // Show skeleton loaders while loading
          Array.from(new Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CustomSkeleton />
            </Grid>
          ))
        : // Show actual job cards when loaded
          jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job._id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100%",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                onClick={() => handleNavigation(job._id)}
              >
                <CardContent
                  sx={{
                    flex: "2 1 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      lineHeight: 1.2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.4,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                  >
                    {job.company} - {job.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mt: 1,
                    }}
                  >
                    {job.salary} • {job.type}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  image={job.image || job.company.image} // Fallback to company image if job image is unavailable
                  alt={`${job.title} at ${job.company.name}`}
                  sx={{
                    flex: "1 1 0",
                    width: { xs: 100, sm: 120, md: 140 },
                    height: "auto",
                    objectFit: "fill",
                  }}
                />
              </Card>
            </Grid>
          ))}
    </Grid>
  );
};

export default ArticleGrid;



// import React from 'react';
// import { Grid, Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

// const articles = [
//   {
//     title: "What is seed funding and how does it differ from Series...",
//     date: "December 2, 2024",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",

//   },
//   {
//     title: "Startup Funding: Exploring Different Sources of Capital",
//     date: "November 30, 2024",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
//   },
//   {
//     title: "AMUL ICE CREAM PARLOUR BUSINESS FRANCHISE",
//     date: "June 29, 2022",
//     image:"https://th.bing.com/th/id/OIP.AZJttRuonl0ra5TGWMXV8AHaFj?rs=1&pid=ImgDetMain",
// },
//   {
//     title: "Frontlines Media – Startup Connect",
//     date: "May 23, 2021",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
//   },
//   {
//     title: "HOW TO START A MEDICAL SHOP (PHARMACY) IN INDIA",
//     date: "April 23, 2021",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
//   },
//   {
//     title: "Business Incubator vs. Accelerator: How to Unlock the Power of Your...",
//     date: "November 30, 2024",
//     image:"https://th.bing.com/th/id/OIP.YRny3hcvyrb8aD3NjKs7DgHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
//   },
// ];

// const ArticleGrid = () => {
//   return (
//     <Grid container spacing={2} sx={{ padding: 2 }}>
//       {articles.map((article, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Card sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
//             <CardContent sx={{ flex: 1 }}>
//               <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
//                 {article.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {article.date}
//               </Typography>
//             </CardContent>
//             <CardMedia
//               component="img"
//               height="140"
//               image={article.image}
//               alt={article.title}
//               sx={{ width: 140 }}
//             />
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default ArticleGrid;
