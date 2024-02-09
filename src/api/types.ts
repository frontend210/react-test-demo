export interface ILoginByEmailReq {
    identifier: string
    identifierType: string
    password: string
}

export interface ILoginRes {
    accessToken: string
    refreshToken: string
    roleName: string
    userInfo: {
        id: number
        email: string
    }
    orgId: number
}
