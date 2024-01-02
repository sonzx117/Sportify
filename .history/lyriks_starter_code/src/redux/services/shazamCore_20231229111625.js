import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

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
        getTopChart: builder.query({ query: () => '/charts/get-top-songs-in-world' }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}`}),

    }),
})

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
  } = shazamCoreApi;