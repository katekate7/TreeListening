//modules.ts
import { apiSlice } from '../apiSlice';// Import the base API configuration

// Extending the base API to add endpoints for working with "Modules"
export const modulesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
        // Endpoint to fetch all modules
    getModules: builder.query({
      query: () => '/modules', // Backend API endpoint for fetching (get) modules
    }),
    createModule: builder.mutation({
      query: (moduleData) => ({
        url: '/modules', // Backend API endpoint for creating modules
        method: 'POST', // HTTP method for the request
        body: moduleData, // Sends module data as the request body
      }),
    }),
    
  }),
});

// Exporting hooks for React components to interact with the modules API
export const {
  useGetModulesQuery, // Hook for fetching modules
  useCreateModuleMutation, // Hook for creating a module
} = modulesApiSlice;