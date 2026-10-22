import React from 'react'
import { Grid, Box , Typography, Button, Link} from '@mui/material'

function Page() {
  return (
    <Grid container spacing={2}>
      {/* First column (2/12 on PC, 0/12 on SM) */}
      <Grid item xs={0} sm={12} md={2}>
        <Box 
          sx={{
            height: '200px',
            backgroundColor: 'lightblue',  // Background color for first column
            display: { xs: 'none', sm: 'block' },  // Hide on mobile, show on larger devices
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Column 1
        </Box>
      </Grid>

      {/* Middle column (8/12 on PC, 12/12 on SM) */}
      <Grid item xs={12} sm={12} md={8}>
      <Box
      sx={{
        height: "100%",
        backgroundColor: "#ebf0eb",
        p: "20px",
      }}
    >
      {/* Black Section */}
      <Box
        sx={{
          display: "flex",
          width: "95%",
          height: "300px",
          backgroundColor: "black",
          margin: "auto",
        }}
      ></Box>

   
      {/* Hiring Section */}
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: 2,
          p: 4,
          mt: 4,
        }}
      >
        {/* Title */}
        {/* <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          textAlign="center"
          sx={{ mt: 2, mb: 3 }}
        >
          The Ultimate Guide to Writing
        </Typography> */}

        {/* Description */}
        {/* <Typography
          variant="body1"
          color="textSecondary"
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Writing effectively is an art. Start by using simple, everyday words
          people can easily understand. Be clear and direct to the point. Keep
          your thoughts flowing logically, and aim for brevity unless you’re
          writing in the long form.
        </Typography> */}

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
              listStyle: 'disc', 
              color: 'text.primary',
              typography: 'body2' 
            }}
          >
          <li style={{marginTop:"15px"}}>Qualification: Any Bachelor’s Degree can apply</li>
          <li style={{marginTop:"15px"}}>6 months – 7 years candidates can apply</li>
          <li style={{marginTop:"15px"}}>Excellent in written and spoken English</li>
          <li style={{marginTop:"15px"}}>Proficient in offering phone-based support to USA or UK customers</li>
          <li style={{marginTop:"15px"}}>Keen to learn new technologies</li>
          <li style={{marginTop:"15px"}}>Deliver voice, email, and chat-based technical support</li>
          <li style={{marginTop:"15px"}}>Conduct online demos and customer training</li>
          <li style={{marginTop:"15px"}}>Requirement gathering and analysis</li>
          <li style={{marginTop:"15px"}}>Analyse and understand the needs of the users and provide timely solutions</li>
          <li style={{marginTop:"15px"}}>Should be willing to relocate and work night shifts</li>
          <li style={{marginTop:"15px"}}>2025 graduates are not eligible to apply for this role</li>
        </Box>

          <Typography variant="body2" sx={{ mb: 1 }}>
            The last date for registration is{" "}
            <strong>17th Jan, 2025</strong>.
          </Typography>
          <Typography variant="body2">Work Location: Chennai</Typography>
        </Box>

        {/* Action Buttons */}
        <Box  sx={{ mt: 4 }}>
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
          Click Here <span style={{color:"black"}}>(apply before the link expires)</span>
        </Typography>

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
    </Box>
</Grid>


      {/* Third column (2/12 on PC, 0/12 on SM) */}
      <Grid item xs={0} sm={12} md={2}>
        <Box 
          sx={{
            height: '200px',
            backgroundColor: 'lightcoral',  // Background color for third column
            display: { xs: 'none', sm: 'block' },  // Hide on mobile, show on larger devices
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Column 3
        </Box>
      </Grid>
    </Grid>
  )
}

export default Page
