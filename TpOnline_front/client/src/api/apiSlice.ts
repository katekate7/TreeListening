// fichier api/apiSlice.tsx

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = "http://localhost:8000"

export const apiSlice = createApi({
  reducerPath: 'app_module_api', // nom du createApi
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_URL, // URL de l'application Symfony
    credentials: 'include',  // dans le header passer le token et des cookies
    prepareHeaders: (headers : Headers) => {

      // retourner le hearders ????

      return headers
    },
  }),
  tagTypes: ['Auth', 'Modules'], // Déclare tous les tags utilisés par l'application, ajouter au fur et à mesure du développement de nouvelles fonctionnalités
  endpoints: () => ({}), // Les endpoints seront définis dans les fichiers API spécifiques
});