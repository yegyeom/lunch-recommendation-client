import { doFetch } from './axios';

const auth = {
    signUp: async (params) => {
        return await doFetch('POST', '/account/users', { params })
    },
    login: async (params) => {
        return await doFetch('POST', '/auth/token', { params })
    }
}

export default auth;