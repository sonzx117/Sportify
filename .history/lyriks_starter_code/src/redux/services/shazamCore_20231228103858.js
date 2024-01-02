import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '323c049666mshf2a972dc65f36dap109927jsn56c8d2982c09',
      'X-RapidAPI-Host': ''
    }
};
fetch('https://shazam-api7.p.rapidapi.com/charts/get-top-songs-in-world', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
})