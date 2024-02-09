// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ILoginByEmailReq, ILoginRes } from './types.ts'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.NL_API_BASE_URL || 'nl-api', // 'https://api.nonlinearcareersdev.com/api/v1'
    }),
    endpoints: (builder) => ({
        // loginByEmail: builder.query<ILoginRes, ILoginReq>({
        //     query: ({ email, password }) => `api/auth/${email}/${password}`,
        // }),
        loginByEmail: builder.mutation<ILoginRes, ILoginByEmailReq>({
            query: (body) => ({
                url: `/auth/authenticate`,
                method: 'POST',
                body,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginByEmailMutation } = authApi
