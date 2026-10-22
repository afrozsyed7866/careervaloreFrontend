"use client"
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Link } from '@mui/material';

const ApplyPage = () => {
  const [timeLeft, setTimeLeft] = useState(10); // Countdown from 10 seconds
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (timeLeft === 0) {
      setLoading(false); // Show the button after countdown
    }

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prevTime => prevTime - 1); // Decrease the countdown every second
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [timeLeft]);

  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      {/* Hiring Details */}
      <Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="error"
          sx={{ mb: 2 }}
        >
          ZOHO IS HIRING: TECHNICAL SUPPORT ENGINEERS
        </Typography>
        <Box 
          component="ul" 
          sx={{ 
            pl: 2, 
            mb: 3, 
            color: 'text.primary',
            typography: 'body2' 
          }}
        >
          <li style={{ marginTop: "15px" }}>Qualification: Any Bachelor’s Degree can apply</li>
          <li style={{ marginTop: "15px" }}>6 months – 7 years candidates can apply</li>
          <li style={{ marginTop: "15px" }}>Excellent in written and spoken English</li>
          <li style={{ marginTop: "15px" }}>Proficient in offering phone-based support to USA or UK customers</li>
          <li style={{ marginTop: "15px" }}>Keen to learn new technologies</li>
          <li style={{ marginTop: "15px" }}>Deliver voice, email, and chat-based technical support</li>
          <li style={{ marginTop: "15px" }}>Conduct online demos and customer training</li>
          <li style={{ marginTop: "15px" }}>Requirement gathering and analysis</li>
          <li style={{ marginTop: "15px" }}>Analyse and understand the needs of the users and provide timely solutions</li>
          <li style={{ marginTop: "15px" }}>Should be willing to relocate and work night shifts</li>
          <li style={{ marginTop: "15px" }}>2025 graduates are not eligible to apply for this role</li>
        </Box>

        <Typography variant="body2" sx={{ mb: 1 }}>
          The last date for registration is{" "}
          <strong>17th Jan, 2025</strong>.
        </Typography>
        <Typography variant="body2">Work Location: Chennai</Typography>
      </Box>

      {/* Countdown or Action Buttons */}
      <Box sx={{ mt: 4 }}>
        {loading ? (
          <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold', 
            backgroundColor: 'lightgrey', // Set the background color
            padding: '8px', // Add padding around the text
            borderRadius: '4px', // Optional: rounded corners
            display: 'inline-block' // Optional: ensure the background only wraps the text
          }}
        >
          Application will be available in {timeLeft} seconds...
        </Typography>
        ) : (
          <Typography
            component="a"
            href="#"
            variant="button"
            sx={{
              px: 4,
              py: 1.5,
              color: 'red',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            Click Here <span style={{ color: "black" }}>(apply before the link expires)</span>
          </Typography>
        )}

        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ mt: 2, display: "block" }}
        >
          Join Our Telegram Group (1.9 Lakhs+ members):{" "}
          <Link href="#" color="primary">
            Click Here To Join
          </Link>
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ mt: 1, display: "block" }}
        >
          For Experience Job Updates Follow –{" "}
          <Link href="#" color="primary">
            FLM Pro Network – Instagram Page
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default ApplyPage;
