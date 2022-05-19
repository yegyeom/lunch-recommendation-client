import { doFetch } from './axios';

const auth = {
    signUp: async (params) => {
        return await doFetch('POST', '/account/users', { params })
    },
    interest: async (params) => {
        console.log(params)
        return await doFetch('POST', '/account/user/interest', { params })
    },
    login: async (params) => {
        return await doFetch('POST', '/auth/token', { params })
    },
    user: async () => {
        return await doFetch('GET', '/account/user')
    }
}

export default auth;