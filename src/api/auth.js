import { doFetch } from './axios';

const auth = {
    signUp: async (params) => {
        return await doFetch('POST', '/account/users', { params })
    },
    login: async (params) => {
        return await doFetch('POST', '/auth/token', { params })
    },
    user: async (params) => {
        return await doFetch('GET', '/account/user')
    }
}

export default auth;