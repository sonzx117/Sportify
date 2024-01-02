import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '323c049666mshf2a972dc65f36dap109927jsn56c8d2982c09',
//       'X-RapidAPI-Host': ''
//     }
// };
// fetch('https://shazam-api7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-api7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => `/charts/get-top-songs-in-world` }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=12` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/get-top-songs-in-country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}` }),
        getArtistDetails: builder.query({ query: (artistId) => `/artist/get-top-songs?id=${artistId}&offset=0` }),
        getSongDetails: builder.query({ query: ({ songid }) => `/songs/get_details?id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/songs/list-recommendations?id=${songid}` }),
        

    }),
});

export const {
    useGetSongsByGenreQuery,
    useGetTopChartsQuery,
    useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  } = shazamCoreApi;