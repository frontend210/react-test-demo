// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IAuthParams } from './types.ts'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        loginByEmail: builder.query<any, IAuthParams>({
            query: ({ email, password }) => `api/auth/${email}/${password}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginByEmailQuery } = pokemonApi
