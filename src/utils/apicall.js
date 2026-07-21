// import axios from 'axios';

// // Custom error class for handling API errors
// class ApiError extends Error {
//   constructor(message, status) {
//     super(message);
//     this.name = 'ApiError'; // Set error name for easier identification
//     this.status = status;
//   }
// }

// export const fetchCardDetails = async (apiEndpoint, method = 'get', data, token) => {
//   try {
//     const config = {
//       method,
//       url: apiEndpoint,
//       data,
//       headers: token ? { Authorization: `${token}` } : {},
//     };

//     const response = await axios(config);
//     return response.data; // Return the data on success
//   } catch (error) {
//   //   if (axios.isAxiosError(error)) {
//   //     const { response } = error;
//   //     let errorMessage = 'An error occurred while fetching data from the API';

//   //     // Extract error message from response if available
//   //     if (response?.data) {
//   //       errorMessage = typeof response.data === 'object' ? response.data.message || JSON.stringify(response.data) : response.data;
//   //     }

//   //     throw new Error(errorMessage, response?.status || 500);
//   //   } else {
//   //     // Non-Axios errors (e.g., network issues or coding errors)
//   //     throw new Error('An unexpected error occurred while fetching data');
//   //   }
//   console.log(error)
//   }
// };
import axios from 'axios';

// Custom error class for handling API errors
class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export const fetchCardDetails = async (apiEndpoint, method = 'get', data, token) => {
  try {
    const config = {
      method,
      url: apiEndpoint,
      data,
      headers: token ? { Authorization: `${token}` } : {}, // Add token to headers if available
    };

    const response = await axios(config);
    return response.data; // Return only the data from the response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error;
      const response = axiosError.response;
      let errorMessage = 'An error occurred while fetching data from the API';
      if (response && response.data !== undefined) {
        errorMessage = typeof response.data === 'object' ? JSON.stringify(response.data) : response.data;
      }
      throw new ApiError(errorMessage, response?.status || 500);
    } else {
      throw new Error('An unknown error occurred while fetching data from the API');
    }
  }
};
