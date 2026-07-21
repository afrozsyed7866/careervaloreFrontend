import React from 'react'
import { Grid, Box } from '@mui/material';
import ArticleCard from './ArticleCard'
function Secondsection() {
  return (
    <div>
<Grid container  sx={{ backgroundColor: '#f5f5f5',height:"400px" }}>
  {/* Main 8-column and 4-column layout */}
  <Grid container item xs={12} md={8} sx={{ backgroundColor: '#ffeb3b'  }}>
    <Grid item xs={8} sx={{ backgroundColor: '#03a9f4', height: '100%',width: '100%'  }}>
      <Box display="flex" flexDirection="column" height="100%">
        {/* <div >
          <ArticleCard/>
        </div>
        <br />
        <div>
          <ArticleCard/>
        </div> */}
      </Box>
    </Grid>


    {/* Grid with 4 columns */}
    <Grid item xs={4} direction="column"  sx={{ backgroundColor: 'blue', height: '100%' }}>
      {/* Container for stacking grids vertically */}
        {/* First Grid */}
        <Grid item xs={3} sx={{ backgroundColor: 'red', height: '25%' }}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            {/* Content for the first grid */}
            <ArticleCard/>
            </Box>
        </Grid>

        {/* Second Grid */}
        <Grid item xs={3} sx={{ backgroundColor: '#8bc34a', height: '25%' }}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            {/* Content for the second grid */}
            <ArticleCard/>
          </Box>
        </Grid>

        {/* Third Grid */}
        <Grid item xs={3} sx={{ backgroundColor: '#ffeb3b', height: '25%',overflow:"hidden" }}>
          <Box display="flex" alignItems="center" justifyContent="center" >
            {/* Content for the third grid */}
            <ArticleCard/>
          </Box>
        </Grid>

        {/* Fourth Grid */}
        <Grid item xs={3} sx={{ backgroundColor: '#f44336', height: '25%' }}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            {/* Content for the fourth grid */}
            <ArticleCard/>
          </Box>
      </Grid>
</Grid>

  </Grid>

  {/* Nested Grid for the 4-column section */}
  <Grid item xs={12} md={4} container >
    {/* First Row */}
    <Grid item xs={12} sx={{ backgroundColor: 'black', height: '50%' }}>
      <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      </Box>
    </Grid>

    {/* Second Row */}
    <Grid item xs={12} sx={{ backgroundColor: '#8bc34a', height: '50%' }}>
      <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      </Box>
    </Grid>
  </Grid>
</Grid>
</div>
  )
}

export default Secondsection