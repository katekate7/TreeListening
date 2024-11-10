// endpoints/auth.tsx
import { apiSlice } from "../apiSlice"

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
  
    // Route pour se connecter
      login: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/api/login_check',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: any) => {
        if (response?.token) {
          // Stockage du token dans localStorage
          localStorage.setItem('accessToken', response.token)
        }

        return response
      },
      invalidatesTags: [{ type: 'Auth', id: 'STATUS' }],
    }),
  }),
});

export const {
  useLoginMutation,
} = authApi;