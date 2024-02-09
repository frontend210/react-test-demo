import type { ILoginByEmailReq, ILoginRes } from '@api/types.ts'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { SerializedError } from '@reduxjs/toolkit'

export interface ILoginForm {
    username: string
    password: string
}

export interface ILoginFormProps {
    loginByEmailFn: (
        req: ILoginByEmailReq
    ) => Promise<{ data: ILoginRes } | { error: FetchBaseQueryError | SerializedError }>
}
