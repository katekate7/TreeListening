// apiSlice.tsx

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/Store'; // Assurez-vous que le chemin est correct

// Base API configuration for making requests to the backend
export const apiSlice = createApi({
  reducerPath: 'api', // Unique identifier for this API slice in the Redux Store
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://tree-learning-app.alwaysdata.net/api', // Base API URL
    credentials: "include", // Ensures cookies are sent with every request
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem('accessToken')// Retrieves the token from localStorage
      if (accessToken)
        headers.set('Authorization', `Bearer ${accessToken}`)  // Adds the token to the Authorization header
      console.log("Access Token:", accessToken); // Returns headers for the request
      return headers
    },
    
  }),
  endpoints: (builder) => ({
    // Définissez vos endpoints ici si nécessaire
  }),
});

// Si vous n'avez pas d'endpoints à exporter pour le moment, vous pouvez simplement exporter l'apiSlice
export default apiSlice;

// Si vous avez des endpoints à exporter, faites-le comme ceci :
// export const { useYourEndpointQuery, useYourOtherEndpointMutation } = apiSlice;