import { Grid, Box } from '@mui/material';
import Image from 'next/image';

function JobCardAndGrid() {
  return (
    <Grid container spacing={2} sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
      {/* Left Large Grid */}
      <Grid item xs={12} md={8} sx={{ backgroundColor: '#ffeb3b', height: '300px' }}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full h-full">
            {/* Image Section */}
            <div className="relative w-full h-48">
              <Image
                src="https://th.bing.com/th/id/OIP.rdjcE1nb7OBB5ARWZgEB3AHaHa?rs=1&pid=ImgDetMain"
                alt="Job Title"
                width={320} // Set the width of the image
                height={192} // Set the height of the image
                objectFit="cover" // 'cover' ensures the image covers the area
              />
            </div>

            {/* Text Section */}
            <div className="text-center mt-4">
              <h2 className="text-lg font-bold text-gray-800 uppercase">Job Title</h2>
              <p className="text-sm text-gray-600 mt-2">
                Author Name - January 12, 2025
              </p>
            </div>
          </div>
        </Box>
      </Grid>

      {/* Right Grid */}
      <Grid item xs={12} md={4} container spacing={2}>
        {/* Top Right Section */}
        <Grid item xs={6} sx={{ backgroundColor: '#03a9f4', height: '140px' }}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full h-full">
              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src="https://th.bing.com/th/id/OIP.rdjcE1nb7OBB5ARWZgEB3AHaHa?rs=1&pid=ImgDetMain"
                  alt="Job Title"
                  width={320}
                  height={192}
                  objectFit="cover"
                />
              </div>

              {/* Text Section */}
              <div className="text-center mt-4">
                <h2 className="text-lg font-bold text-gray-800 uppercase">Job Title</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Author Name - January 12, 2025
                </p>
              </div>
            </div>
          </Box>
        </Grid>

        <Grid item xs={6} sx={{ backgroundColor: '#8bc34a', height: '140px' }}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full h-full">
              <div className="relative w-full h-48">
                <Image
                  src="https://th.bing.com/th/id/OIP.rdjcE1nb7OBB5ARWZgEB3AHaHa?rs=1&pid=ImgDetMain"
                  alt="Job Title"
                  width={320}
                  height={192}
                  objectFit="cover"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg font-bold text-gray-800 uppercase">Job Title</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Author Name - January 12, 2025
                </p>
              </div>
            </div>
          </Box>
        </Grid>

        {/* Bottom Right Section with JobCard */}
        <Grid item xs={6} sx={{ backgroundColor: '#ff5722', height: '140px' }}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full h-full">
              <div className="relative w-full h-48">
                <Image
                  src="https://th.bing.com/th/id/OIP.rdjcE1nb7OBB5ARWZgEB3AHaHa?rs=1&pid=ImgDetMain"
                  alt="Job Title"
                  width={320}
                  height={192}
                  objectFit="cover"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg font-bold text-gray-800 uppercase">Job Title</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Author Name - January 12, 2025
                </p>
              </div>
            </div>
          </Box>
        </Grid>

        <Grid item xs={6} sx={{ backgroundColor: '#9c27b0', height: '140px' }}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full h-full">
              <div className="relative w-full h-48">
                <Image
                  src="https://th.bing.com/th/id/OIP.rdjcE1nb7OBB5ARWZgEB3AHaHa?rs=1&pid=ImgDetMain"
                  alt="Job Title"
                  width={320}
                  height={192}
                  objectFit="cover"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg font-bold text-gray-800 uppercase">Another Job Title</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Another Author - January 15, 2025
                </p>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default JobCardAndGrid;
